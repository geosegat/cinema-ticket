import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import SelectShowTime from "./Screens/SelectShowTime";
import SerachMovie from "./Screens/SearchMovie";

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
