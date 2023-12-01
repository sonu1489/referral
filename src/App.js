import "./App.css";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCard from "./pages/SingleCard";

function App() {
  const [data, setData] = useState();

  // fetching data from api
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // calling function on initial render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        {/* sending data to home component */}
        <Route path="/" exact element={<Home data={data} />} />

        {/* single profile page */}
        <Route path="/character/:id" element={<SingleCard />} />
      </Routes>
    </Router>
  );
}

export default App;
