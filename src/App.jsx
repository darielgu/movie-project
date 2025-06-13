import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Modal from "./components/Modal";
import "./App.css";
import MovieContainer from "./components/MovieContainer";

function App() {
  return (
    <>
      <Header />
      {/* <Modal /> */}
      <MovieContainer />
      <Footer />
    </>
  );
}

export default App;
