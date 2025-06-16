import "/Users/dariel.gutierrez/Desktop/projects/flixster/movie-project/src/components/MoiveCard.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
export default function MovieCard({
  imageURL,
  title,
  rating,
  altText,
  onClick,
}) {
  function addDefaultImg(e) {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  }
  return (
    <div className="card-container" onClick={onClick}>
      <img
        src={imageURL}
        alt={altText}
        className="movie-image"
        onError={addDefaultImg}
      />
      <div className="card-body">
        <h3 className="movie-title">{title}</h3>
        <br />
        <p className="rating">
          Rating: {rating}
          <StarRateIcon fontSize="" />
        </p>
      </div>
    </div>
  );
}
