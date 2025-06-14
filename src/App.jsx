import { use, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Modal from "./components/Modal";
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
  console.log(searchData);
  return (
    <>
      <Header
        notifyParentOfData={handleSearchData}
        notifyParentOfClick={handleReset}
        notifyParentOfSelector={setSelector}
      />
      {/* <Modal /> */}
      <MovieContainer searchData={searchData} />
      <Footer />
    </>
  );
}

export default App;
