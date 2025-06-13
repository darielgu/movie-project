import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./MovieContainer.css";
export default function MovieContainer() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const imgSRC = "https://image.tmdb.org/t/p/w500";
  const [page, setPage] = useState(1); // going to hold the pages we'll load
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchList = async () => {
      // we are waiting for axios to fetch our data
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
        ); // we get data
        setLoading(false);
        setMovies((previous) => {
          // had an issue where duplicates were being added
          const prevId = new Set(previous.map((movie) => movie.id)); // make a set of Id's already in array
          const unique = data.results.filter((movie) => !prevId.has(movie.id)); // compare new id's to unique arrays and creata array
          return [...previous, ...unique]; // spread into one movie array
        });
        // setMovies(movies.filter((movie) => {}));
        setTotalPage(data.results.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchList();
  }, [page]);
  console.log(movies);

  return (
    <>
      <div className="main-container">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              imageURL={imgSRC + movie.backdrop_path}
              altText={movie.title}
              title={movie.title}
              rating={Math.floor(movie.vote_average)}
            />
          );
        })}
      </div>
      <button className="load-button" onClick={() => setPage(page + 1)}>
        {loading ? "Loading.." : "Load More"}
      </button>
    </>
  );
}
