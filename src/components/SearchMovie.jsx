import React, { useState } from "react";

const SearchMovie = ({ movies, setMovies, filterMovies }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  

  return (
    <form className="">
      <input
        className="w-full py-3 px-4 border rounded-2xl focus:outline-gray-400 focus:outline focus:ring-2"
        type="text"
        name="search"
        value={search}
        placeholder="Search for movie by name"
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchMovie;
