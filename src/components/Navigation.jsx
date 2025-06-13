import SearchIcon from "@mui/icons-material/Search";
import "./Navigation.css";
import { useState } from "react";
export default function Navigation() {
  let age = 17;
  const [filterOption, setFilteredOption] = useState("");
  function handleChange(e) {
    setFilteredOption(e.target.value);
  }
  return (
    <form name="selections" action="" className="nav-items">
      <input type="text" className="input" id="text" />

      <button className="search">
        <SearchIcon />
      </button>
      <select className="select" id="select" onChange={handleChange}>
        <option value="now_playing">Search By</option>
        <option value="top_rated">Rating</option>
        <option value="title">Title</option>
        <option value="release_date">Release</option>
      </select>
    </form>
  );
}
