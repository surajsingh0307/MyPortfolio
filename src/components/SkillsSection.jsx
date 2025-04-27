import { LuCode } from "react-icons/lu";
import { FiTool, FiUsers } from "react-icons/fi";

const skillsData = {
  technical: [
    { name: "HTML & CSS", level: "Advanced" },
    { name: "JavaScript", level: "Proficient" },
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Node.js", level: "Basic" },
    { name: "Tailwind CSS", level: "Advanced" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "VS Code", level: "Expert" },
    { name: "Figma", level: "Intermediate" },
    { name: "Chrome DevTools", level: "Proficient" },
  ],
  soft: [
    "Communication",
    "Problem Solving",
    "Time Management",
    "Teamwork",
    "Adaptability",
    "Attention to Detail",
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto xl:px-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600">
            Here are the technologies and tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="shadow-sm hover:shadow-md transition-all duration-300  rounded-md p-4">
            <div className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="p-2 rounded-full bg-purple-100 text-tech-purple">
                <LuCode className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {skillsData.technical.map((skill) => (
                  <div key={skill.name} className="inline-flex items-center">
                    <div className="px-3 py-1.5 text-xs font-semibold bg-purple-100 rounded-3xl hover:bg-purple-200 text-purple-600 border-0">
                      {skill.name}
                      <span className="ml-1.5 text-xs text-gray-500">
                        • {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="shadow-sm hover:shadow-md transition-all duration-300  rounded-md p-4">
            <div className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="p-2 rounded-full bg-sky-100 text-sky-500">
                <FiTool className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Tools & Technologies</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((tool) => (
                  <div key={tool.name} className="inline-flex items-center">
                    <div className="px-3 py-1.5 text-xs font-semibold bg-blue-100 rounded-3xl hover:bg-blue-200 text-sky-500 border-0">
                      {tool.name}
                      <span className="ml-1.5 text-xs text-gray-500">
                        • {tool.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1 rounded-md p-4">
            <div className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="p-2 rounded-full bg-indigo-100 text-indigo-500">
                <FiUsers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Soft Skills</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {skillsData.soft.map((skill) => (
                  <div key={skill} className="inline-flex items-center">
                    <div className="px-3 py-1.5 text-xs font-semibold bg-indigo-100  hover:bg-indigo-200 text-indigo-600 rounded-3xl border-0">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
