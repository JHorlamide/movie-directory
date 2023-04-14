import React from "react";
import CreateMovie from "./components/CreateMovie";
import ListMovie from "./components/ListMovie";
import Navbar from "./components/Navbar";
import SearchMovie from "./components/SearchMovie";
import useMovieHandler from "./hooks/useMovieHandler";

const App = () => {
  const { filteredMovies, setMovies, filterMovies } = useMovieHandler();

  return (
    <div className="">
      <Navbar />

      <div className="container mx-auto flex space-x-40 py-40">
        <div className="w-1/2">
          <CreateMovie setMovies={setMovies} />
        </div>

        <div className="w-1/2 space-y-4">
          <SearchMovie filterMovies={filterMovies} />
          <ListMovie movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
}

export default App;
