import ProjectCard from "./project-card";
import data from "../projects/projects.json";
import { useEffect, useState } from "react";

// for searching, index the tags and split up search term and search within the index
// The index will map to the projects
export default function Projects() {

  const [filterOption, setFilterOption] = useState('all');

  const filteredMap = data.filter(item => {
    if (filterOption == "all") {
      return item;
    } else if (filterOption == "game") {

      return item.type.toLowerCase() == "game".toLowerCase();
    } else if (filterOption == "web") {

      return item.type.toLowerCase() == "web".toLowerCase();
    } else if (filterOption == "desktop") {

      return item.type.toLowerCase() == "desktop".toLowerCase();
    }
  })

  return (
    <div className="flex flex-col h-screen bg-primary-light dark:bg-primary-dark">
      <div className="ml-30 mt-20 ">
        <h1 className="font-bold leading-snug tracking-tight text-text-light dark:text-text-dark text-3xl lg:max-w-3xl 3xl:text-5xl">
          Projects
        </h1>
      </div>
      <div className="flex justify-center flex-col gap-2 mb-5">
        <div className="flex justify-start ml-30 mt-5 text-text-light dark:text-text-dark ">
          Filter :
          <select className="ml-2 border border-primary-light border-1 rounded-md" onChange={e => setFilterOption(e.target.value)} name="type" id="type">
            <option className="text-text-light" value="all">All</option>
            <option className="text-text-light" value="web">Web</option>
            <option className="text-text-light" value="desktop">Desktop</option>
            <option className="text-text-light" value="game">Games</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col pl-25 pr-10 items-center justify-items-center gap-15 bg-primary-light dark:bg-primary-dark sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredMap.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
