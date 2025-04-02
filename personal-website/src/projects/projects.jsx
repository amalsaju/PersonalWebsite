import ProjectCard from "./project-card";
import data from "../projects/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col h-screen bg-primary-color">
      <div className="ml-30 mt-30 mb-20">
        <h1 className="font-bold leading-snug tracking-tight text-text-color  text-3xl lg:max-w-3xl lg:text-5xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-col pl-30 items-end gap-5 bg-primary-color md:grid md:grid-cols-3 md:justify-items-center">
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
