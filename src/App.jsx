import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginSignUp/LoginForm";
import Register from "./components/LoginSignUp/Register";

// import './App.css'

function App() {
  return (
    <>
      {/* <div
        className="text-white h-[100vh] flex justify-center item-center bg-cover"
        style={{ backgroundImage: "url(../src/assets/grrenImage.avif)" }}
      ></div> */}

      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
