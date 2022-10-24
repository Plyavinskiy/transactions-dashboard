import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Chart />
    </div>
  );
}

export default App;
