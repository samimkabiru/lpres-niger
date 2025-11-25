import { FaQuoteLeft } from 'react-icons/fa';
import danladiMohammed from '../assets/danladi-mohammed.jpg';

const FromDanladiMohammed = () => {
  return (
    <div className="py-16 px-4 my-10 bg-gray-50 flex justify-center rounded-3xl">
      <div className="relative z-0 ">
        <span className="inline-block text-6xl text-gray-200 absolute top-3 right-2 z-10 ">
          <FaQuoteLeft />
        </span>
        <div className="z-10 border-1 shadow-sm py-8 px-6 max-w-[600px] rounded-4xl rounded-br-none flex flex-col items-center bg-gradient-to-br from-white/70 to-white/10 backdrop-blur-lg lg:rounded-4xl">
          <img
            src={danladiMohammed}
            alt="danladi mohammed"
            className=" w-full max-w-[140px] object-cover rounded-lg mb-5"
          />
          <p className="text-gray-600 mb-4">
            We are not just implementing projects for today; we are laying
            foundations that will serve the livestock sector for generations.
          </p>
          <div className="text-green-900">
            <p className="font-semibold text-[16px]">
              Mal. Jiya Danladi Mohammed
            </p>
            <p className="text-xs">
              State Project Coordinator, L-PRES Niger State
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromDanladiMohammed;
