import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginSignUp/LoginForm";
import Register from "./components/LoginSignUp/Register";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="board" element={<div>Board</div>} />
          <Route path="analytics" element={<div>Analytics</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
