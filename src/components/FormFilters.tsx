import { BsFillPersonFill } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { ChangeEvent, MouseEvent, useState } from "react";

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
  const [filtersData, setFiltersData] = useState({
    starRating: 1,
    numAdults: 0,
    numChildren: 0,
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(filtersData);
  };

  let key: keyof typeof filtersData;
  type name = "starRating" | "numAdults" | "numChildren";

  const increase = (e: MouseEvent<HTMLButtonElement>, inputName: name) => {
    e.preventDefault();
    key = inputName;

    setFiltersData((prev) => {
      return {
        ...prev,
        [inputName]: prev[`${key}`] + 1,
      };
    });
  };

  const decrease = (e: MouseEvent<HTMLButtonElement>, inputName: name) => {
    e.preventDefault();
    key = inputName;
    setFiltersData((prev) => {
      return {
        ...prev,
        [inputName]: prev[`${key}`] - 1,
      };
    });
  };

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    event.preventDefault();
    setFiltersData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="column absolute top-[450px] left-0 right-0 m-auto flex h-40 w-8/12 items-center justify-center rounded-3xl bg-gray-200 shadow-xl shadow-slate-400 "
    >
      <div className="m-4 flex flex-col">
        <label htmlFor="star rating" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <AiFillStar style={{ color: "#37b0d4" }} className="mr-2" />
            Hotels's Stars
          </span>
        </label>
        <select
          value={filtersData.starRating}
          id="star rating"
          name="starRating"
          className="h-12 w-60"
          onChange={handleChangeData}
        >
          {ratingArr.map((star: number) => (
            <option key={star} value={star} className="h-12">
              {star !== 1 ? `${star} stars` : `${star} star`}
            </option>
          ))}
        </select>
      </div>
      <div className="mr-4 flex flex-col">
        <label htmlFor="number of adults" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <BsFillPersonFill
              size={18}
              style={{ color: "#37b0d4" }}
              className="mr-2"
            />
            Adults
          </span>
        </label>
        <div className="flex">
          <input
            className="h-12"
            type="number"
            min={0}
            placeholder="Number of Adults"
            name="numAdults"
            value={filtersData.numAdults}
            onChange={handleChangeData}
          />
          <button
            onClick={(e) => decrease(e, "numAdults")}
            className="h-12 w-12 border border-black"
          >
            -
          </button>
          <button
            onClick={(e) => increase(e, "numAdults")}
            className="h-12 w-12 border border-black"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="number of children" className="pb-2">
          <span className="flex items-center font-thin text-black">
            <FaBabyCarriage
              size={18}
              style={{ color: "#37b0d4" }}
              className="mr-2"
            />
            Children
          </span>
        </label>
        <div className="flex">
          <input
            className="h-12 w-44 border border-black p-2"
            min={0}
            type="number"
            placeholder="Number of children"
            name="numChildren"
            onChange={handleChangeData}
            value={filtersData.numChildren}
          />
          <button
            onClick={(e) => decrease(e, "numChildren")}
            className="h-12 w-12 border border-black"
          >
            -
          </button>
          <button
            onClick={(e) => increase(e, "numChildren")}
            className="h-12 w-12 border border-black"
          >
            +
          </button>{" "}
        </div>
      </div>
      <button
        type="submit"
        className=" m-4 mt-11 w-48 rounded-full border-2 border-black p-4 text-black hover:bg-black hover:text-white"
      >
        search
      </button>
    </form>
  );
};

export default FormFilters;
