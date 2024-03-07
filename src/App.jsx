import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginSignUp/LoginForm";
import Register from "./components/LoginSignUp/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
