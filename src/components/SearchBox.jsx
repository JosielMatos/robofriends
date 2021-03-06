import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <input
        className='pa3 ba b--green br3 bg-lightest-blue'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      ></input>
    </>
  );
};

export default SearchBox;
