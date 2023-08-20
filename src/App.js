import React, {useEffect} from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./component/Landingpage";
import "./App.css"
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landingpage />} /> 
    //   </Routes>
    // </BrowserRouter>
    <>
    <Landingpage/>
    </>
  );
}

export default App;
