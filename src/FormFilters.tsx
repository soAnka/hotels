import { BsFillPersonFill } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export type FormDataType = {
  starRating: number;
  numAdults: number;
  numChildren: number;
};

interface FormFiltersProps {
  handleSubmit: (formData: FormDataType) => void;
  ratingArr: number[];
}

const FormFilters = ({ handleSubmit, ratingArr }: FormFiltersProps) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filtersData = new FormData(e.currentTarget);
    const stars = filtersData.get("starRating") ?? 1;
    const adults = filtersData.get("numAdults") ?? 1;
    const kids = filtersData.get("numChildren") ?? 0;

    const formData = {
      starRating: +stars,
      numAdults: +adults,
      numChildren: +kids,
    };
    handleSubmit(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="column absolute left-0 right-0 top-80 m-auto flex h-40 w-8/12 items-center justify-center rounded-xl bg-background-primary shadow-xl shadow-slate-400 "
    >
      <div className="m-4 flex flex-col">
        <label htmlFor="star rating" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <AiFillStar color="black" className="mr-2" />
            Hotels's Stars
          </span>
        </label>
        <select id="star rating" name="starRating" className="w-60">
          {ratingArr.map((star: number) => (
            <option key={star} value={star}>
              {star !== 1 ? `${star} stars` : `${star} star`}
            </option>
          ))}
        </select>
      </div>
      <div className="mr-4 flex flex-col">
        <label htmlFor="number of adults" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <BsFillPersonFill size={18} color="black" className="mr-2" />
            Adults
          </span>
        </label>
        <input
          type="number"
          min={0}
          placeholder="Number of Adults"
          name="numAdults"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="number of children" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <FaBabyCarriage size={18} color="black" className="mr-2" />
            Children
          </span>
        </label>
        <input
          min={0}
          type="number"
          placeholder="Number of children"
          name="numChildren"
        />
      </div>
      <button
        className=" m-4 mt-8 w-48 rounded-full border-2 border-black p-4 text-black hover:bg-black hover:text-white"
        type="submit"
      >
        search
      </button>
    </form>
  );
};

export default FormFilters;
