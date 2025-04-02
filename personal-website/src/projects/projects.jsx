import ProjectCard from "./project-card";
import data from "../projects/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col h-screen ml-20 mr-10 mb-10">
      <div className="">
        <h1 className="font-bold leading-snug tracking-tight text-gray-200 my-6 w-full text-3xl lg:max-w-3xl lg:text-5xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-col items-end gap-5 md:grid md:grid-cols-3 md:justify-items-center">
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
