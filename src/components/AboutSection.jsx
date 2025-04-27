import { LuGraduationCap } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { DiCodeBadge } from "react-icons/di";

function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 xl:px-20 ">
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
              Me
            </span>
          </h1>
          <div className="w-20 h-1 rounded-4xl bg-gradient-to-r from-purple-400 to-blue-500 mt-[-12px] mb-4"></div>
          <p className="text-gray-600">
            Get to know me and my background in computer science and frontend
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6 animate-fade-in text-gray-600">
            <p>
              Hello! I'm a passionate Computer Science student completing my
              B.Tech degree. My journey in tech started with a curiosity about
              how websites work, which led me to explore frontend development.
            </p>
            <p>
              During my academic journey, I've developed a strong foundation in
              programming fundamentals, algorithms, and data structures.
              However, my true passion lies in creating intuitive and visually
              appealing user interfaces.
            </p>
            <p>
              I enjoy the blend of creativity and logic that frontend
              development offers. Being able to transform code into interactive
              experiences that users can enjoy is what drives me every day.
            </p>
            <p>
              I'm currently seeking internship opportunities where I can apply
              my skills, learn from experienced professionals, and contribute to
              meaningful projects.
            </p>
          </div>
          <div className="grid gap-6 ">
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-md shadow-s hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <LuGraduationCap size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <p className="text-gray-600 mb-3">B. Tech Computer Science</p>
                <p className="text-sm text-gray-500">
                  Lovely Professionall University, Punjab • 2025 - Present
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-md shadow-s hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                <FiUser size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Personal Info</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>Name : Suraj Singh</li>
                  <li>Email: surajsingh877028@gmail.com</li>
                  <li>Loacation: Agra, Up</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-md shadow-s hover:shadow-md transition-shadow duration-300">
              <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                <DiCodeBadge size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tech Interests</h3>
                <div>
                  {[
                    "React",
                    "TypeScript",
                    "UI/UX",
                    "Web Design",
                    "Frontend Development",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
