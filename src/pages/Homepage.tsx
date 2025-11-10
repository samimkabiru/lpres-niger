import FAQS from '@/components/FAQS';
import FrameworkSection from '@/components/FrameworkSection';
import HeroSection from '@/components/HeroSection';
import ValueChainsSection from '@/components/ValueChainsSection';
import Voices from '@/components/Voices';
import 'aos/dist/aos.css';
import { BiSupport } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';
import { PiGearSixBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <div className="fab fab-flower">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle text-white bg-green-900 border-none"
        >
          <PiGearSixBold />
        </div>
        <button className="fab-main-action btn btn-circle btn-lg text-white bg-green-900 border-none">
          <FaUserGear />
        </button>

        <div className="tooltip tooltip-left" data-tip="Jump to top">
          <button
            className="btn btn-lg btn-circle"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowUp />
          </button>
        </div>
        <Link to="#">
          <div className="tooltip tooltip-left" data-tip="Lay a complaint">
            <button className="btn btn-lg btn-circle">
              <BiSupport />
            </button>
          </div>
        </Link>
      </div>
      <HeroSection />
      <ValueChainsSection />
      <FrameworkSection />
      <Voices />
      <FAQS />
    </div>
  );
};

export default Homepage;
