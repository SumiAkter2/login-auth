import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import LogIn from "./Component/LogIn";
import Navbar from "./Component/Navbar";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
