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
  const [like, setLike] = useState(false);
  // for movie liking I would imagine we could pass up the movie card and add it to an array of liked movies
  // we would grab this is in favorited and render the whole array of movie objects
  const [likedMovies, setLikedMovies] = [];

  function addDefaultImg(e) {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  }
  function handleLike(e) {
    e.stopPropagation();
    if (!like) {
      setLike(true);
      e.target.className = "liked";
    } else {
      setLike(false);
      e.target.className = "";
    }
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
        <span onClick={handleLike}>&#9829;</span>
      </div>
    </div>
  );
}
