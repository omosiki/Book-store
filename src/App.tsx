import "./App.css";
import {AppProvider} from "./Data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Category from "./component/Category";
import Trending from "./component/Trending";
import Daily from "./component/Daily";
import Navba from "./component/Navba";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/home" element={<Home/>}/> */}
      <Route path="/categories" element={<Category/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/daily" element={<Daily/>}/>
      </Routes>
    </Router>
  );
}

export default App;
