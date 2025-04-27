import { useState } from "react";
import { LuExternalLink, LuGithub, LuLayers, LuCode } from "react-icons/lu";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A responsive admin dashboard for e-commerce platforms with charts, analytics, and inventory management.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
    category: "web",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application that helps users organize tasks with drag-and-drop functionality and prioritization.",
    tags: ["React", "Redux", "CSS"],
    image: "/placeholder.svg",
    category: "app",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing projects and skills with a modern UI design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.svg",
    category: "web",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather application that displays current and forecast weather data using a third-party API.",
    tags: ["React", "API Integration", "CSS"],
    image: "/placeholder.svg",
    category: "app",
    demoLink: "#",
    codeLink: "#",
  },
];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto xl:px-20 px-4 ">
        <div className="max-w-3xl flex flex-col items-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 rounded-4xl bg-gradient-to-r from-purple-400 to-blue-500 mb-4"></div>
          <p className="text-gray-600">
            Check out some of my recent projects and applications I've built.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {["all", "web", "app"].map((category) => (
            <button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "bg-purple-600 hover:bg-purple-500 text-white capitalize px-4 py-2 rounded-md"
                  : "border border-purple-700 text-purple-600 hover:text-white hover:bg-purple-600 px-4 py-2 rounded-md capitalize"
              }
            >
              {category === "all" ? "All Projects" : `${category} Projects`}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="h-52 bg-gray-100 relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end gap-3">
              <a
                href={project.demoLink}
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-purple-600 hover:bg-white transition-colors"
                aria-label="View Demo"
              >
                <LuExternalLink size={18} />
              </a>
              <a
                href={project.codeLink}
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-purple-600 hover:bg-white transition-colors"
                aria-label="View Code"
              >
                <LuGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-purple-100 text-purple-600">
            {project.category === "web" ? (
              <LuCode size={18} />
            ) : (
              <LuLayers size={18} />
            )}
          </div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 p-4">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-gray-500 capitalize">
            {project.category} Project
          </span>
          <a
            href={project.demoLink}
            className="text-purple-500 hover:text-blue-500 transition-colors text-sm font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
