const HeroSection = () => {
  return (
    <div className="relative py-10 px-5 bg-[url('src/assets/gov-bago.png')] bg-cover bg-center lg:bg-none lg:bg-white/50 lg:backdrop-blur-lg -z-10">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 -translate-z-1 lg:hidden"></div>

      <div className="text-center py-[85px] text-white max-w-4xl mx-auto translate-z-1 lg:text-black">
        <h1 className="text-4xl font-semibold mb-5 md:text-5xl lg:text-6xl pb-4">
          Empowering Livestock Productivity for a Sustainable Future
        </h1>
        <p className="lg:text-gray-600 text-md mb-5 md:text-lg">
          L-PRES is a 6 Year Project with Development Objective PDO to improve
          livestock productivity, resilience and commercialization of selected
          value chains and to strengthen the country's capacity to respond to an
          eligible crisis or emergency.
        </p>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200 cursor-pointer"
          >
            Our Projects
          </button>
          <button
            type="button"
            className="text-white hover:text-green-800 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer me-2 mb-2 transition-colors duration-200 lg:text-gray-700 lg:border-gray-700 lg:hover:bg-green-800 lg:hover:text-white"
          >
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
