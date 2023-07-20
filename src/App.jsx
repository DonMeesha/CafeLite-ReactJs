import React from "react";
import "./App.css";
import Top from "./components/Top/Top";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Discover from "./components/Discover/Discover";
import Process from "./components/Process/Process";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Top />
      <Header />
      <Home />
      <Book/>
      <Discover/>
      <Process/>
      <Service/>
    </>
  );
}

export default App;
