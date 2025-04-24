import { Routes, Route } from "react-router";
import "./App.css";

import Home from "./home/home.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Projects from "./projects/projects.jsx";
import Contact from "./contacts/contact.jsx";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);
  console.log(light);

  return (
    <div data-theme={light ? 'light' : 'dark'}>
      <div className="w-screen">
        <button onClick={() => setLight(!light)} className="absolute right-5 top-5 rounded-md p-1 rounded-md stroke-text-light dark:stroke-text-dark text-text-light dark:text-text-dark hover:bg-highlight-light dark:hover:bg-highlight-dark hover:stroke-primary-light dark:hover:stroke-primary-dark hover:text-primary-light dark:hover:text-primary-dark">
          {light ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          }
        </button>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
