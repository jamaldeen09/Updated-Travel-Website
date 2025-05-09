import React, { useState } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
// s: title, description, posterURL, rating

const MovieList = () => {
  // handle title and description

  const [usersTitle, setUsersTitle] = useState("");
  const [usersDescription, setUsersDescription] = useState("");

  // onchange functions for title and description
  const handleTitle = (event) => {
    setUsersTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setUsersDescription(event.target.value);
  };

  // posterurl and rating
  const [usersUrl, setUsersUrl] = useState("");
  const [usersRating, setUsersRating] = useState(null);

  // functions to handle poster url and rating

  const handlePosterUrl = (event) => {
    setUsersUrl(event.target.value);
  };

  const handleRating = (event) => {
    setUsersRating(event.target.value);
  };

  // handle Adding of movie
  const [movies, setMovies] = useState([]);

  const handleAdding = () => {
    // extracting values
    const extractedTitle = usersTitle;
    const extractedDescription = usersDescription;
    const extractedURL = usersUrl;
    const extractedRating = parseInt(usersRating);

    // create movie object
    const movieInfo = {
      movieTitle: extractedTitle,
      movieDescription: extractedDescription,
      movieUrl: extractedURL,
      movieRating: extractedRating,
    };

    // add it to movies array
    setMovies((prevMovies) => [...prevMovies, movieInfo]);
  };

  // handle deleting
  const handleMovieDelete = (indexToDelete) => {
    const newFilteredArr = movies.filter((_, index) => index !== indexToDelete);
    setMovies((prevMovies) => newFilteredArr);
  };

  // handle filtering
  const [filteredChoice, setFilteredChoice] = useState("");

  const handleFiltering = (event) => {
    setFilteredChoice(event.target.value);
  };
  return (
    <div className="min-h-screen flex flex-col gap-10">
      <Navbar />
      <div className="flex justify-center items-center min-h-64 flex-col gap-5">
        <div className="flex gap-10 py-20">
          <input
            value={usersTitle}
            onChange={handleTitle}
            type="text"
            className="h-[7vh] pl-5 rounded-xl shadow-xl w-[20vw]"
            placeholder="Title"
          />
          <input
            value={usersDescription}
            onChange={handleDescription}
            type="text"
            className="h-[7vh] pl-5 rounded-xl shadow-xl w-[20vw]"
            placeholder="Description"
          />
          <input
            value={usersUrl}
            onChange={handlePosterUrl}
            type="text"
            className="h-[7vh] pl-5 rounded-xl shadow-xl w-[20vw]"
            placeholder="Poster URL"
          />
          <input
            value={usersRating}
            onChange={handleRating}
            type="number"
            className="h-[7vh] px-5 rounded-xl shadow-xl w-[20vw]"
            placeholder="Rating"
          />
        </div>

        <div className="w-[30vw] flex gap-5 items-center mb-5">
          <label htmlFor="" className="text-white font-bold">
            Filter By:{" "}
          </label>
          <select
            value={filteredChoice}
            onChange={handleFiltering}
            className="w-[20vw] h-[7vh]"
          >
            <option value="">Pick</option>
            <option value="Title">Title</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
        <button
          onClick={handleAdding}
          style={{ backgroundColor: "red" }}
          className="btnScale px-5 py-3 text-white rounded-xl shadow-xl"
        >
          Add Movie
        </button>
      </div>

      <div className="p-20 gap-10 grid grid-cols-3">
        {movies
          .filter((movieItem) => {
            if (filteredChoice === "Title") {
              return movieItem.movieTitle
                .toLowerCase()
                .includes(usersTitle.toLowerCase());
            }
            if (filteredChoice === "Rating") {
              return (
                usersRating && movieItem.movieRating === parseInt(usersRating)
              );
            }
            return true;
          })
          .map((movieItem, index) => (
            <MovieCard
              deleteitem={() => handleMovieDelete(index)}
              key={index}
              title={movieItem.movieTitle}
              description={movieItem.movieDescription}
              posterUrl={movieItem.movieUrl}
              rating={movieItem.movieRating}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
