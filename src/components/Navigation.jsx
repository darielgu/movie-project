// import SearchIcon from "@mui/icons-material/Search";
// import "./Navigation.css";
// import { useState } from "react";
// export default function Navigation() {
//   const [filterOption, setFilteredOption] = useState("");
//   const [search, setSearch] = useState("");
//   function handleSearch(e) {
//     e.preventDefault();
//     console.log(search);
//     // setSearch(e.target.input);
//   }
//   function handleChange(e) {
//     setSearch(e.target.value);
//   }
//   return (
//     <form name="selections" action="" className="nav-items">
//       <input
//         type="text"
//         className="input"
//         id="text"
//         value={search}
//         onChange={handleChange}
//         placeholder="Look for a movie"
//       />

//       <button className="search" onClick={handleSearch}>
//         <SearchIcon />
//       </button>
//       <select className="select" id="select" onChange={handleChange}>
//         <option value="now_playing">Search By</option>
//         <option value="top_rated">Rating</option>
//         <option value="title">Title</option>
//         <option value="release_date">Release</option>
//       </select>
//     </form>
//   );
// }
