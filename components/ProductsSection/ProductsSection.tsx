import { Projects } from "@/constants/project.constant";
import ProjectItem from "./ProjectItem/ProjectItem";

export default function ProductsSection() {
  return (
    <div className="flex flex-col lg:p-[100px] p-[50px] border-b-[0.5px] min-h-[h-screen-minus-header]">
      <div className="flex flex-row items-start">
        <div className="w-full flex flex-col justify-start items-start">
          <p className="font-bold text-5xl ">FEATURED PROJECTS</p>
          <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        {Projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            year={project.year}
            role={project.role}
            liveDemo={project.liveDemo}
            githubProject={project.githubProject}
          />
        ))}
      </div>
    </div>
  )
}