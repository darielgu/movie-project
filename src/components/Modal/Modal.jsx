import { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
export default function Modal({ show, onClose, movie }) {
  if (!show) return null; // if show is false no modal
  console.log("logging movie in MODAL ", movie);
  const imgSRC = "https://image.tmdb.org/t/p/w500";

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
                <h2>Released {movie.release_date}</h2>
                <h2>{movie.runtime} minutes</h2>
                <h2>
                  <ul>
                    Genres:
                    {movie.genres?.map((genre) => {
                      return (
                        <li className="gradient" key={genre.id}>
                          {genre.name}
                        </li>
                      );
                    })}
                  </ul>
                  <video src=""></video>
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
