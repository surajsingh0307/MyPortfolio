import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto xl:px-20 px-4 flex flex-col lg:flex-row items-center justify-between gap-10  ">
        <div className="lg:w-1/2 space-y-6 ">
          <h2 className="text-gray-600 text-xl md:text-2xl font-normal">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block">Suraj Singh</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text">
              Frontend Developer
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            A Computer Science student passionate about creating beautiful,
            responsive, and user-friendly web experiences.
          </p>
          <div className="flex gap-4">
            <button className="bg-gray-800 text-white text-sm px-4 py-2 font-semibold rounded-md hover:bg-gray-700 cursor-pointer ">
              View Projects
            </button>
            <button className="border border-purple-500 text-purple-500 px-4 py-2 font-semibold rounded-md hover:bg-purple-400 hover:text-white text-sm cursor-pointer">
              Contact Me
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="#">
              <LuGithub size={24} />
            </a>
            <a href="#">
              <FiLinkedin size={24} />
            </a>
            <a href="#">
              <LuMail size={24} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className=" bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-xl">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 flex items-center justify-center">
                Your photo
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-300 flex items-center justify-center rounded-full motion-safe:animate-bounce shadow-lg font-medium">
              <span className="text-xs">B.Tech CS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
