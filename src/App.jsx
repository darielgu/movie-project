import { use, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import MovieContainer from "./components/MovieContainer";

function App() {
  const [searchData, setSearchData] = useState("");
  const handleSearchData = (data) => {
    setSearchData(data);
  };
  const [reset, setReset] = useState(false);
  const handleReset = (click) => {
    setReset(click);
  };
  const [selector, setSelector] = useState("");
  const handleSelector = (select) => {
    setSelector(select);
  };
  const [favorited, setFavorited] = useState(null);
  const handleFav = (fav) => {
    setFavorited(fav);
  };
  return (
    <>
      <Header
        notifyParentOfData={handleSearchData}
        notifyParentOfClick={handleReset}
        notifyParentOfSelector={setSelector}
      />
      {/* <Sidebar notifyParentOfFavorites={handleFav} /> */}
      <MovieContainer
        searchData={searchData}
        selector={selector}
        favorited={favorited}
      />
      <Footer />
    </>
  );
}

export default App;
