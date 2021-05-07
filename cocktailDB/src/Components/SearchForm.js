import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <>
      <section className="ser">
        <form onSubmit={handleSubmit} className="searchForm">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            type="text"
            name="text"
            id="search"
            ref={searchValue}
            onChange={handleOnChange}
            className="search"
          />
        </form>
      </section>
    </>
  );
};

export default SearchForm;
