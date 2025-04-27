const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="mx-auto xl:px-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a
              href="#home"
              className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
            <p className="text-gray-500 mt-2">
              &copy; {currentYear} Suraj Singh.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-gray-500 text-sm">Made with ❤️ and React</div>

            <a
              href="#home"
              className="p-3 rounded-full bg-tech-purple/10 text-tech-purple hover:bg-tech-purple hover:text-white transition-all"
              aria-label="Back to top"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
