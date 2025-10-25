import {
  GiRooster,
  GiCow,
  GiRecycle,
  GiBee,
  GiGoat,
  GiPig,
} from 'react-icons/gi';

const ValueChainsShowcase = () => {
  const valueChains = [
    { type: 'empty', position: 'left' },
    {
      name: 'poultry',
      icon: <GiRooster />,
      description:
        'The Poultry value chain will receive adequate attention from L-PRES.',
    },
    {
      name: 'cattle',
      icon: <GiCow />,
      description:
        'The beef cattle value chain is a catalyst for local economic growth, fostering the development of indigenous industries.',
    },
    {
      name: 'waste management',
      icon: <GiRecycle />,
      description:
        'Effective waste management, when handled professionally, can not only contribute to environmental sustainability.',
    },
    {
      name: 'micro livestock',
      icon: <GiBee />,
      description:
        'The beekeeping and honey-bee wax value chain will be supported.',
    },
    {
      name: 'sheep & goat',
      icon: <GiGoat />,
      description:
        'L-PRES will support smallholder sheep and goat marketing systems, tackle.',
    },
    {
      name: 'pigs',
      icon: <GiPig />,
      description:
        'The pork value chain will receive dedicated attention, with a focus on optimizing production and addressing key challenges.',
    },
    { type: 'empty', position: 'right' },
  ];

  return (
    <div className="px-4 py-7 grid grid-cols-2 gap-8 items-start overflow-hidden lg:grid-cols-4">
      {valueChains.map((chain) =>
        !chain.type ? (
          <div
            key={chain.name}
            className="max-w-sm mx-auto py-4 px-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:transform-[scale(1.1)] transition-transform cursor-pointer"
          >
            <span className="inline-block text-5xl text-green-700 mb-3">
              {chain.icon}
            </span>
            <h3 className="mb-2 text-md capitalize font-semibold tracking-tight text-gray-700">
              {chain.name}
            </h3>
            <p className="mb-3 font-normal text-gray-500 text-sm">
              {chain.description}
            </p>
          </div>
        ) : (
          <div
            className={`border-dashed border-2 border-green-700 w-3xl ${
              chain.position === 'left'
                ? 'justify-self-end mr-10'
                : 'justify-self-start ml-10'
            } h-full rounded-lg hidden lg:block`}
          ></div>
        )
      )}
    </div>
  );
};

export default ValueChainsShowcase;
