// import Navigation from "./Navigation";
import "./Header.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "./Navigation.css";
import { useState } from "react";
export default function Header({
  notifyParentOfData,
  notifyParentOfClick,
  notifyParentOfSelector,
}) {
  const [search, setSearch] = useState("");
  const [clicked, setClick] = useState(false);

  // function to sendClick notice to parent container
  function sendClick() {
    setClick(true);
    notifyParentOfClick(clicked);
  }
  // function to send search data to parent on submit
  function handleSearch(e) {
    e.preventDefault();
    notifyParentOfData(search);
  }
  // function to update search content status
  function handleChange(e) {
    setSearch(e.target.value);
  }
  //function to handle select
  function handleSelect(e) {
    notifyParentOfSelector(e.target.value);
  }
  return (
    <header className="header-container gradient">
      <h1 className="web-name">
        Salesflix <LiveTvIcon />
      </h1>
      <form name="selections" action="" className="nav-items">
        <input
          type="text"
          className="input"
          id="text"
          value={search}
          onChange={handleChange}
          placeholder="Look for a movie"
        />

        <button className="search" onClick={handleSearch}>
          <SearchIcon />
        </button>
        <button onClick={sendClick} className="search">
          <RestartAltIcon />
        </button>
        <select className="select" id="select" onChange={handleSelect}>
          <option value="now_playing">Search By</option>
          <option value="top_rated">Rating</option>
          <option value="title">Title</option>
          <option value="release_date">Release</option>
        </select>
      </form>
    </header>
  );
}
