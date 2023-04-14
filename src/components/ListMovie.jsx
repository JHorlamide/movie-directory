import React from "react";

const MoviesList = ({ movie }) => {
  return (
    <div className="w-full bg-gray-700 rounded-2xl px-5 py-4 text-white flex flex-col space-y-6">
      {/* Name & Rating */}
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-md">{movie.name}</h1>
        <p className="text-sm text-gray-300">Rating: {movie.rating}/100</p>
      </div>

      {/* Duration */}
      <div>{movie.duration}/Hrs</div>
    </div>
  );
};

const ListMovie = ({ movies }) => {

  return (
    <section className="bg-gray-100 shadow-md border-b-4 border-b-green-400 rounded-lg py-8 px-5">
      <div className="w-full flex flex-col space-y-6">
        {movies.map((movie, idx) => (
          <MoviesList key={idx} movie={movie} />
        ))}

        {movies.length === 0 && (
          <h1 className="text-3xl font-bold text-center">No Result Found</h1>
        )}
      </div>
    </section>
  );
};

export default ListMovie;
