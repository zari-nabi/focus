import React from "react";
import "./SearchInput.css";

const SearchInputFields = ({
  searchQueries,
  handleInputChange,
  name,
  type = "text",
}) => {
  return (
    <input
      type={type}
      placeholder="Search..."
      value={searchQueries}
      onChange={handleInputChange}
      name={name}
    />
  );
};

export default SearchInputFields;
