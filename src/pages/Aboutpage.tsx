import farmers from '../assets/farmers.jpg';
import bgCock from '../assets/bg-cock.jpg';
import bgSheep from '../assets/bg-sheeps.jpg';
import bgHen from '../assets/bg-hen.jpg';

const Aboutpage = () => {
  const companyPrinciples = [
    {
      title: 'Vision',
      image: bgCock,
      details:
        'A Livestock Industry where value addition and quality services enable sustainable, diversified and productive livestock economy in Nigeria.',
    },
    {
      title: 'Mission',
      image: bgSheep,
      details:
        'To provide enabling environment for quality and efficient service delivery to livestock farmers and stakeholders through effective livestock policy formulation and implementation',
    },
    {
      title: 'Core Values',
      image: bgHen,
      details:
        'Professionalism, Teamwork, Innovation, Quality Service, Productivity, Resilience, Value Addition, Self Sufficiency, Wealth Creation, Inclusiveness.',
    },
  ];

  const projectsComponents = [
    {
      title:
        'Component 1: Strengthening National Livestock Institutions For Improved Enabling Environment And Service Delivery',
      details:
        'The component will foster an enabling environment for public and private operators through improving the performance and service delivery of institutions involved in the livestock subsector and the livestock policy and regulation formulation, planning and programing. It will also support the creation of innovative multi-purpose Livestock Service Centers (LSCs). The component will benefit both producers and other value chain actors and provide the enabling platform for sustainable investment in Component 2.',
    },
    {
      title: 'Component 2: Enhancement Of Value Chain Performance',
      details:
        'This component aims to enhance participation of smallholder producers and other private sector operators all along the selected VCs under a PPP arrangement. It will support activities to improve access to critical knowledge, services, inputs, equipment, infrastructure investments, as well as provision of corresponding financing for investment initiatives in the form of matching grants. These investment initiatives (subprojects) will be demand-driven, selected through competitive process. Their business cases will need to be clearly demonstrated and intrinsically viable economically. Activities selected will need to consider reducing the vulnerability of livestock to changing climate. The Project-selected VCs will be considered sequentially. Component 2 will focus on three priority livestock VCs (cattle - dairy and beef - sheep, goat, and poultry) in the first three years. The three other priority VCs (hides and skins, pigs, and honey) will be added from the third year onward to the extent of their ability to improve food security, nutrition, and generate viable investment opportunities.',
    },
    {
      title:
        'Component 3: Crisis Prevention And Management, Conflict Mitigation And Peace Building, And Project Coordination',
      details:
        'The aim of this component is threefold: (i) ensuring that GoN is better equipped to respond to livestock crises and emergencies; (ii) helping mitigate conflicts and build peace in the context of current insecurity where pastoralist and sedentary producers have often diverging interests; and (iii) establishing appropriate coordination, Monitoring and Evaluation (M&E), and communication regarding Project implementation.',
    },
  ];

  return (
    <div>
      <div className="min-h-screen max-w-[1140px] mx-auto px-4 py-12 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative rounded-lg overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          <img src={farmers} className="shadow-2xl w-full" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-green-900 lg:text-5xl">
            About L-PRES
          </h1>
          <div className="text-gray-600">
            <p className="py-6">
              L-PRES is a 6 Year Project with Development Objective (PDO) to
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
      </div>
      <div className="bg-gray-50 rounded-[30px] rounded-br-[110px]">
        <div className="max-w-[1140px] mx-auto px-4 grid py-24 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {companyPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="group card bg-base-100 image-full w-full shadow-sm cursor-pointer"
              data-aos="zoom-in"
            >
              <figure>
                <img
                  className="group-hover:transform-[scale(1.3)] transition-transform duration-1000"
                  src={principle.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{principle.title}</h2>
                <p className="tracking-wide md:text-[16px]">
                  {principle.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[900px] mx-auto py-14 px-4">
        <h2 className="text-3xl font-semibold text-green-900">
          Projects Components
        </h2>
        <p className="text-gray-600 my-4">
          The Livestock Productivity and Resilience Project (L-PRES) is a
          strategic input to the country's long-term approach of developing and
          transforming its livestock subsector.
        </p>
        <div className="join join-vertical bg-base-100 w-full">
          {projectsComponents.map((project, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold text-green-900 lg:text-2xl">
                {project.title}
              </div>
              <div className="collapse-content text-sm lg:text-[16px] text-gray-600">
                {project.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
