import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Screens/Home/Home";
import SelectShowTime from "./assets/Screens/SelectShowTime/SelectShowTime";
import SerachMovie from "./assets/Screens/SearchMovie/SerachMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-movie" element={<SerachMovie />} />
        <Route path="/select-showtime" element={<SelectShowTime />} />
      </Routes>
    </Router>
  );
}

export default App;
