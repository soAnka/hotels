const FormFilters = ({ handleSubmit, ratingArr }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const filtersData = new FormData(e.target);
    const formData = {
      starRating: filtersData.get("starRating") ?? 1,
      numAdults: filtersData.get("numAdults") ?? 1,
      numChildren: filtersData.get("numChildren") ?? 0,
    };
    handleSubmit(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="star rating">
        Star Rating
        <select id="star rating" name="starRating">
          {ratingArr.map((star) => (
            <option key={star}>{star}</option>
          ))}
        </select>
      </label>
      <label htmlFor="number of adults">
        <input type="number" placeholder="Number of Adults" name="numAdults" />
      </label>
      <label htmlFor="number of children">
        <input
          type="number"
          placeholder="Number of children"
          name="numChildren"
        />
      </label>
      <button type="submit">search</button>
    </form>
  );
};

export default FormFilters;
