import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch= (value) =>{
        setSearchValue(value)
    }
  return (
    <div>
      <div className="search-container custom-search-container">
        <input
          type="text"
          id="search"
          autoComplete="off"
          value={searchValue}
          placeholder={"Search"}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        {searchValue === "" ? (
          <SearchIcon sx={{ height: "20px", color: "#4D4F5C" }} />
        ) : (
          <IconButton onClick={() => setSearchValue("")} sx={{ p: 0, m: 0 }}>
            <CloseIcon style={{ height: "20px" }} />
          </IconButton>
        )}
      </div>

      <h2>{searchValue}</h2>
    </div>
  );
};

export default Search;

