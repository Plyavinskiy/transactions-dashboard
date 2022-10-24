import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import TransactionsList from "./components/TransactionsList/TransactionsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Chart />
      <TransactionsList />
    </div>
  );
}

export default App;
