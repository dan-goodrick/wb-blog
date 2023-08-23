import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"
import Post from "./Components/Post/Post.jsx"
import TopicList from "./Components/TopicList/TopicList.jsx"
export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/topics" element={<TopicList/>}/>
        <Route path="/post/:id" element = {<Post/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
