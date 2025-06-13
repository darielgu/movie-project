import "/Users/dariel.gutierrez/Desktop/projects/flixster/movie-project/src/components/MoiveCard.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
export default function MovieCard({ imageURL, title, rating }) {
  const [isClicked, setClick] = useState(false);
  function clicked() {
    setClick(true);
  }
  return (
    <div className="card-container">
      <img src={imageURL} alt={altText} className="movie-image" />
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
