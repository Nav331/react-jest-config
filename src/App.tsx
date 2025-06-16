import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Login} from "./components/Login/Login";
import Home from "./components/Home/Home";
import React from "react";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
