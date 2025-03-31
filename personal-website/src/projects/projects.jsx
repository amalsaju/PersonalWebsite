import ProjectCard from "./project-card";
import data from "../projects/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col ml-20 mr-10 mb-10">
      <h1 className="font-bold leading-snug tracking-tight text-gray-200 my-6 w-full text-3xl lg:max-w-3xl lg:text-5xl">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:justify-items-center">
        {data.map((item) => (
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
