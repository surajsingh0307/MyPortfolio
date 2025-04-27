import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-gray-600 text-lg md:text-2xl font-normal">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Suraj Singh</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text">
              Frontend Developer
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            A Computer Science student passionate about creating beautiful,
            responsive, and user-friendly web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-800 text-white text-sm px-6 py-3 font-semibold rounded-md hover:bg-gray-700 transition">
              View Projects
            </button>
            <button className="border border-purple-500 text-purple-500 text-sm px-6 py-3 font-semibold rounded-md hover:bg-purple-400 hover:text-white transition">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LuGithub
                size={28}
                className="hover:text-purple-500 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FiLinkedin
                size={28}
                className="hover:text-blue-600 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LuMail size={28} className="hover:text-rose-500 transition" />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-full p-2 shadow-xl">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-semibold">
                Your Photo
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-green-300 flex items-center justify-center rounded-full motion-safe:animate-bounce shadow-lg font-medium text-xs md:text-sm">
              B.Tech CS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
