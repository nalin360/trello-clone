import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginSignUp/LoginForm";
import Register from "./components/LoginSignUp/Register";
import Dashboard from "./pages/Dashboard";
// import { List } from "@material-tailwind/react";
import List from "./components/Board/List"
import Board from "./components/Board";
import Analytics from "./pages/Analytics";
import Body from "./components/Board/Body";





function App() {
 
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/body" element={<Body />}/>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="board" element={<Board/>} />
          <Route path="analytics" element={<div>analytics</div>} />
        </Route>
      </Routes>


      
    </>
  );
}



export default App;
