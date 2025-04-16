import ProjectCard from "./project-card";
import data from "../projects/projects.json";
import { useEffect, useState } from "react";

// for searching, index the tags and split up search term and search within the index
// The index will map to the projects
export default function Projects() {

  const [filterOption, setFilterOption] = useState('all');

  const handleButtonClick = (value) => {
    setFilterOption(value);
    console.log(value);
  }


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
      <div className="flex justify-center flex-col gap-2 mb-20">
        <div className="flex justify-center">
          Search bar here
        </div>
        <div className="flex justify-center">
          Filter options here
        </div>
        <div className="flex justify-center">
          Type:
          <select onChange={e => setFilterOption(e.target.value)} name="type" id="type">
            <option value="all">All</option>
            <option value="game">Games</option>
            <option value="web">Web</option>
            <option value="desktop">Desktop</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col pl-25 pr-10 items-end gap-15 bg-primary-light dark:bg-primary-dark md:grid md:grid-cols-4 md:justify-items-center">
        {filteredMap.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            description={item.description}
            imageName={item.imageName}
          />
        ))}
      </div>
    </div>
  );
}
