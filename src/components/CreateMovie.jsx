import React, { useState } from "react";

const CreateMovie = ({ setMovies }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [movieData, setMovieData] = useState({
    name: "",
    rating: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    setMovieData((prevMovieData) => ({
      ...prevMovieData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieData.duration.length < 2) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    setMovies((prevMovies) => [...prevMovies, movieData]);

    setMovieData({
      name: "",
      rating: "",
      duration: "",
    });
  };

  return (
    <section className="bg-gray-100 shadow-lg rounded-3xl py-8 px-5">
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <label htmlFor="name">Movie Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={movieData.name}
            onChange={handleInputChange}
            className="w-full py-3 px-3 rounded-3xl border border-gray-400 focus:outline-gray-400 focus:outline focus:ring-2"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={movieData.rating}
            onChange={handleInputChange}
            className="w-full py-3 px-3 rounded-3xl border border-gray-400 focus:outline-gray-400 focus:outline focus:ring-2"
          />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            id="duration"
            value={movieData.duration}
            onChange={handleInputChange}
            className="w-full py-3 px-3 rounded-3xl border border-gray-400 focus:outline-gray-400 focus:outline focus:ring-2"
          />
        </div>

        {showAlert && (
          <div className="container border border-red-500 text-red-500 px-10 py-4 rounded-lg">
            <h1>Please enter a valid duration. e.g (2.5hr or 135min)</h1>
          </div>
        )}

        <button
          className="px-4 py-3 rounded-full bg-slate-600 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateMovie;
