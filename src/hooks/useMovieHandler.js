import { useMemo, useState } from "react";

const useMovieHandler = () => {
  const [movies, setMovies] = useState([]);

  const filterMovies = (searchParam) => {
    if (!searchParam) return movies;
    return movies.filter((movie) => {
      console.log(movie.name.toLowerCase().includes(searchParam.toLowerCase()))
      return movie.name.toLowerCase().includes(searchParam.toLowerCase())
    });
  }

  const filteredMovies = useMemo(filterMovies, [movies])

  return {
    filteredMovies,
    filterMovies,
    setMovies
  }
}

export default useMovieHandler;