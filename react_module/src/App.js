import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./component/Signup";
import { NavbarComp } from "./components/NavbarComp";
import { API } from "./components/API";
// import { Myfortfolio } from "./components/Myfortfolio";
import { MutualFunds } from "./components/MutualFunds";
import { Login } from "./component/Login";
import { Blog } from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/myhomepage" element={<route/>}/> */}
        <Route path="/home" element={<NavbarComp />} />
        <Route path="/api" element={<API />} />
        {/* <Route path="/my-portfolio" element={<Myfortfolio />} /> */}
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
