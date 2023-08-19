import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./component/Landingpage"; // Correct the import and case here

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} /> {/* Correct the component name */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
