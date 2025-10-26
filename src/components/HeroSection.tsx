const HeroSection = () => {
  return (
    <div className="relative py-10 px-5 bg-[url('/gov-bago.png')] bg-cover bg-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 -translate-z-1"></div>

      <div
        className="text-center py-[85px] text-white max-w-4xl mx-auto translate-z-1"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <h1 className="text-4xl font-semibold mb-5 md:text-5xl lg:text-6xl pb-4">
          Empowering Livestock Productivity for a Sustainable Future
        </h1>
        <p className="text-md mb-5 md:text-lg">
          L-PRES is a 6 Year Project with Development Objective PDO to improve
          livestock productivity, resilience and commercialization of selected
          value chains and to strengthen the country's capacity to respond to an
          eligible crisis or emergency.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200 cursor-pointer"
          >
            Our Projects
          </button>
          <button
            type="button"
            className="text-white hover:text-green-800 border border-white hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer me-2 mb-2 transition-colors duration-200"
          >
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
