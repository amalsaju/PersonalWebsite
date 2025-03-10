import {Routes, Route } from "react-router";
import "./App.css";

import Home from "./home/home.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Projects from "./projects/projects.jsx";
import Contact from "./contacts/contact.jsx";

function App() {
  return (
    <>
      {/* <Sidebar />
      <Home />
      <Projects />
      <Contact /> */}

      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
