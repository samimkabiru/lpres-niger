import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative py-10 px-5 bg-[url('/gov-bago.png')] bg-cover bg-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 -translate-z-1"></div>

      <div
        className="text-center py-[105px] text-white max-w-4xl mx-auto translate-z-1"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <h1 className="text-4xl font-semibold mb-5 md:text-5xl lg:text-6xl pb-4">
          Championing Livestock Transformation in Niger State
        </h1>
        <p className="text-md mb-5 md:text-lg">
          Empowering farmers, strengthening livelihoods, and fostering
          sustainable livestock productivity across Niger State through the
          World Bank-supported L-PRES project.
        </p>
        <div>
          <Link
            className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200 cursor-pointer"
            to="/projects"
          >
            Our Projects
          </Link>
          <Link
            className="text-white hover:text-green-800 border border-white hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer me-2 mb-2 transition-colors duration-200"
            to="/about"
          >
            More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
