import { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
export default function Modal({ show, onClose, movie }) {
  if (!show) return null; // if show is false no modal
  console.log("logging movie in MODAL ", movie);
  const imgSRC = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="modal-container" onClick={onClose}>
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
              <h1>{movie.title}</h1>
              <img src={imgSRC + movie.poster_path} alt="" />
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
              <p>{movie.runtime}</p>
              <ul>Genres</ul>
              {movie.genres?.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
