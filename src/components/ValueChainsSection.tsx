import ValueChainsShowcase from './ValueChainsShowcase';
import fmafs from '../assets/fmafs.webp';
import worldBank from '../assets/world-bank.webp';
import LPRESTeam from '../assets/lpres-team.jpg';
import nigerStateSeal from '../assets/niger-state-seal.jpg';

const ValueChainsSection = () => {
  return (
    <div className="text-center">
      <div className="bg-green-700 py-10 px-4 rounded-b-[100px]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-semibold lg:text-4xl pb-8 text-lime-100 border-b-[1px] border-lime-100 lg:border-0 ">
            Welcome to Livestock Productivity & Resilience Project (L-PRES)
          </h2>
          <div className="text-white border-b-[1px] border-lime-100 pb-10 my-8">
            <p>
              L-PRES is a 6 Year Project with Development Objective PDO to
              improve livestock productivity, resilience and commercialization
              of selected value chains and to strengthen the country's capacity
              to respond to an eligible crisis or emergency.
            </p>
            <p>
              Livestock is vital to Nigeria's economy and poverty alleviation.
              It employs 30 percent of the rural population but accounts only
              for less than 10 percent of the Agricultural GDP and 2-3 percent
              of the National GDP , which highlights the sub-sector
              under-development. Livestock provides increased significant
              economic stability to rural households in the form of cash
              buffers, as capital reserves, and creates a hedge against
              inflation.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img className="w-[20%] md:w-[16%]" src={fmafs} alt="logo" />
          <img
            src={nigerStateSeal}
            className="w-[50px] h-[50px] rounded-full object-cover md:w-[100px] md:h-[100px]"
            alt=""
          />
          <img className="w-[20%] md:w-[16%]" src={worldBank} alt="logo" />
        </div>
      </div>
      <div className="py-[100px] px-4 text-left text-gray-600 grid items-center gap-10 max-w-[1024px] mx-auto lg:grid-cols-2">
        <div className="text-[16px]">
          <h2 className="font-semibold text-3xl text-green-800 mb-4 lg:text-5xl">
            Selected Value Chains
          </h2>
          <p className="pb-5">
            At the heart of our mission, the Livestock Productivity and
            Resilience Enhancement Project (L-PRES) strategically focuses on
            selected value chains to drive impactful change. One such priority
            is the Beef Cattle value chain, serving as an engine for local
            economic growth by nurturing and supporting indigenous industries.
            Additionally, L-PRES places emphasis on the Sheep & Goat value
            chain, with a dedicated commitment to fortifying smallholder
            marketing systems
          </p>
          <p>
            Through targeted interventions, we aim to address challenges and
            ensure the sustainability and prosperity of these vital components
            of Nigeria's livestock sector. By strategically supporting and
            optimizing these selected value chains, L-PRES endeavors to create a
            ripple effect, fostering economic resilience and livelihood
            improvement in the communities we serve.
          </p>
        </div>
        <img className="w-full rounded-3xl" src={LPRESTeam} alt="L-PRES Team" />
      </div>
      <ValueChainsShowcase />
    </div>
  );
};

export default ValueChainsSection;
