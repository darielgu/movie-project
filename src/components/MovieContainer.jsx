import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./MovieContainer.css";
import Modal from "./Modal";

export default function MovieContainer({ searchData, clickStatus, selector }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const imgSRC = "https://image.tmdb.org/t/p/w500";
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Basic fetch call for rendering movie list when no search or buttons have been applied
  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setLoading(false);
        setMovies((previous) => {
          const prevId = new Set(previous.map((movie) => movie.id)); // make a set of Id's already in array
          const unique = data.results.filter((movie) => !prevId.has(movie.id)); // compare new id's to unique arrays and creata array
          return [...previous, ...unique]; // spread into one movie array
        });
        filterHelper();
        setTotalPage(data.results.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchData == "") {
      fetchList();
    }
  }, [page]);

  // When searching clear movies array of old movies
  useEffect(() => {
    setMovies([]);
  }, [searchData]);

  // When searching fetch movies according to searchData
  useEffect(() => {
    const fetchSearch = async () => {
      // setMovies([]);
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchData}&include_adult=false&language=en-US&page=${page}`
      );

      setLoading(false);
      setMovies((previous) => {
        const prevId = new Set(previous.map((movie) => movie.id)); // make a set of Id's already in array
        const unique = data.results.filter((movie) => !prevId.has(movie.id)); // compare new id's to unique arrays and creata array
        return [...previous, ...unique]; // spread into one movie array
      });
      filterHelper();
      setTotalPage(data.results.totalPage);
    };
    if (searchData != "") {
      fetchSearch();
    }
  }, [searchData, page]);

  // Reset Button Clicked ReRender Effect
  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setLoading(false);
        setMovies((previous) => {
          const prevId = new Set(previous.map((movie) => movie.id)); // make a set of Id's already in array
          const unique = data.results.filter((movie) => !prevId.has(movie.id)); // compare new id's to unique arrays and creata array
          return [...previous, ...unique]; // spread into one movie array
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchList();
  }, [clickStatus]);

  // helper function to do array sorting for dropdown
  function filterHelper() {
    console.log("Current selector value:", selector);
    if (selector === "top_rated") {
      setMovies((prevMovies) => {
        return [...prevMovies].sort((a, b) => {
          return b.vote_average - a.vote_average;
        });
      });
    } else if (selector == "title") {
      setMovies((prevMovies) => {
        return [...prevMovies].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      });
    } else if (selector == "release_date") {
      setMovies((prevMovies) => {
        return [...prevMovies].sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateA - dateB;
        });
      });
    }
  }

  // when selector is updated call array filter
  useEffect(() => {
    filterHelper();
  }, [selector]); // TODO: fix this to reapply filter when load more is clicked

  return (
    <>
      <div className="main-container">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              imageURL={imgSRC + movie.poster_path}
              altText={movie.title}
              title={movie.title}
              rating={Math.floor(movie.vote_average)}
              onClick={() => displayModal()}
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
