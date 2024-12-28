import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Project_1 from "./app/components/Project_1";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
