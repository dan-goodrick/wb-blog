import Nav from "./Components/Nav/Nav.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"
import Footer from "./Components/Footer/Footer"
import PastProjects from "./Components/PastProjects/PastProjects"
import Candidates from "./Components/Candidates/Candidates";
import Donate from "./Components/Donate/Donate";
import About from "./Components/About/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/candidates" element={<Candidates/>}/>
        <Route path="/projects" element={<PastProjects/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
