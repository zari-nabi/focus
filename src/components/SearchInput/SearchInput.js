import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchInput.css";

const SearchInput = ({
  searchQuery,
  filteredItems,
  handleInputChange,
  handleResultItemClick,
}) => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search PACKAGING..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      {filteredItems.length > 0 && (
        <ul className="search-results">
          {filteredItems.map((item, index) => (
            <li key={index} onClick={() => handleResultItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
