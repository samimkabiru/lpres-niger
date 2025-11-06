import { FaQuoteLeft } from 'react-icons/fa';

const Voices = () => {
  const voices = [
    {
      name: 'Dr. Jonathan Wasa',
      position: 'Permanent Secretary, Ministry of Livestock & Fisheries',
      quote:
        'Every L-PRES intervention must be sustainable and impactful. Ownership by communities is our guarantee for success.',
    },
    {
      name: 'Habiba Usman',
      position: 'Gender/GBV Officer',
      quote:
        'Inclusivity is our priority. Women and youth must be part of every livestock transformation process.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 my-10 rounded-4xl">
      <div className="grid lg:grid-cols-2 max-w-[765px] mx-auto gap-10">
        {voices.map((voice) => (
          <div
            key={voice.name}
            className="shadow-sm border-1 rounded-4xl p-4 bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-xl"
          >
            <span className="text-4xl inline-block text-gray-300/50 mb-5">
              <FaQuoteLeft />
            </span>
            <div className="text-center">
              <p className="text-gray-600 mb-6">{voice.quote}</p>
              <div>
                <p className="font-semibold text-green-900">{voice.name}</p>
                <p className="text-xs text-green-900">{voice.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voices;
