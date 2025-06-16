import { useEffect, useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { YouTube } from "@mui/icons-material";
import axios from "axios";
export default function Modal({ show, onClose, movie }) {
  if (!show) return null; // if show is false no modal
  console.log("logging movie in MODAL ", movie);
  const imgSRC = "https://image.tmdb.org/t/p/w500";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [videoKey, setVideoKey] = useState(null);
  useEffect(() => {
    setVideoKey(null);
    async function getVideo() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
        );
        console.log(data.results);
        const trailer = data.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );
        const firstYouTubeVideo = data.results.find(
          (vid) => vid.site === "YouTube"
        );

        if (trailer) {
          setVideoKey(trailer.key);
        } else if (firstYouTubeVideo) {
          setVideoKey(firstYouTubeVideo.key);
        } else {
          setVideoKey(null); // No YouTube video found
        }
      } catch (error) {
        console.error(error);
      }
    }
    getVideo();
  }, [movie]);

  return (
    <div className="modal-container gradient" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">
          {!movie ? (
            <h1>loading</h1>
          ) : (
            <div className="details">
              <div className="left">
                <h1>{movie.title}</h1>
                <img src={imgSRC + movie.poster_path} alt="" />
              </div>
              <div className="items">
                <h2>
                  <strong>Overview: </strong>
                  {movie.overview}
                </h2>
                <h2>Released: {movie.release_date}</h2>
                <h2>
                  {movie.runtime} <strong> minutes </strong>
                </h2>
                <h2>
                  <ul>
                    <strong>Genres:</strong>
                    {movie.genres?.map((genre) => {
                      return (
                        <li className="gradient" key={genre.id}>
                          {genre.name}
                        </li>
                      );
                    })}
                  </ul>
                </h2>
                <iframe
                  width="600" // Example width
                  height="300" // Example height
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Movie Trailer"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
