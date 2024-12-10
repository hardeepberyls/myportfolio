import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./app/About";
import Contact from "./app/Contact";
import Project_1 from "./app/components/Project_1";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project1" element={<Project_1/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
