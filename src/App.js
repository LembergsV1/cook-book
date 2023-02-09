import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Add from "./Components/Pages/Add";
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    <Navbar /><Router>
      <Routes>
        <Route path="/add" element={<Add/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
