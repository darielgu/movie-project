import { useState } from "react";
import "./Sidebar.css";
export default function Sidebar({ notifyParentOfFavorites }) {
  function handleFavorites() {
    setFavoriteTab(true);
    notifyParentOfFavorites(favoriteTab);
  }
  const [favoriteTab, setFavoriteTab] = useState(false);
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li onClick={handleFavorites}>Favorites</li>
        <li>
          <a href="">Watchlist</a>
        </li>
      </ul>
    </div>
  );
}
