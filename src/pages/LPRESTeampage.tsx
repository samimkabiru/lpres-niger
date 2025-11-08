import fatimaUsman from '../assets/fatima-usman.jpg';
import habibaUsman from '../assets/habiba-usman.jpg';
import hussainiGarba from '../assets/hussaini-garba.jpg';
import zakariyauMuhammad from '../assets/zakariyau-muhammad.jpg';
import harunaAliyu from '../assets/haruna-aliyu.jpg';
import babaTailor from '../assets/nma-baba.jpg';
import fawziyyaSani from '../assets/fawziyya-sani.jpg';
import nuraAhmed from '../assets/nura-ahmed.jpg';
import adamuIbrahim from '../assets/adamu-ibrahim.jpg';
import jiyaDanladi from '../assets/danladi-mohammed.jpg';
import abdullahiDanasabe from '../assets/abdullahi-danasabe.jpg';
import usmanGarba from '../assets/usman-garba.jpg';
import ibrahimMaimuna from '../assets/ibrahim-maimuna.jpg';
import habibaMuazu from '../assets/habiba-muazu.jpg';

const LPRESTeampage = () => {
  const teamMembers = [
    {
      name: 'Jiya Danladi Muhammed',
      position: 'state project coordinator',
      image: jiyaDanladi,
    },
    {
      name: 'Habiba Usman',
      position: 'gender/gender base officer',
      image: habibaUsman,
    },
    {
      name: 'Hussaini Garba Beji',
      position: 'extension officer',
      image: hussainiGarba,
    },
    {
      name: 'Zakariyau Muhammad',
      position: 'value chain officer',
      image: zakariyauMuhammad,
    },
    {
      name: 'Fatima Usman Abdullahi',
      position: 'internal auditor',
      image: fatimaUsman,
    },
    {
      name: 'Dr. Haruna Aliyu Evuti',
      position: 'animal health officer',
      image: harunaAliyu,
    },
    {
      name: 'Nma Baba Tailor',
      position: 'project engineer',
      image: babaTailor,
    },
    {
      name: 'Fawziyya Sani Adamu',
      position: 'social safeguard officer',
      image: fawziyyaSani,
    },
    {
      name: 'Nura Ahmed',
      position: 'animal husbandry officer',
      image: nuraAhmed,
    },
    {
      name: 'Dr. Adamu Ibrahim Baba',
      position: 'monitoring and evaluation officer',
      image: adamuIbrahim,
    },
    {
      name: 'Abdullahi DanAsabe Yakolo',
      position: 'state project accountant',
      image: abdullahiDanasabe,
    },
    {
      name: 'Usman Garba Musa',
      position: 'procurement officer',
      image: usmanGarba,
    },
    {
      name: 'Ibrahim Maimuna Azumi',
      position: 'communications/ICT officer',
      image: ibrahimMaimuna,
    },
    {
      name: "Habiba Mu'azu Anache",
      position: 'environmental officer',
      image: habibaMuazu,
    },
  ];

  return (
    <div className="px-4 py-10 max-w-[900px] mx-auto">
      <h1 className="font-semibold text-2xl text-green-900 mb-3 md:text-3xl">
        About the L-PRES team
      </h1>
      <p className="text-gray-600 mb-10">
        Our dynamic team at L-PRES is a blend of expertise, dedication, and
        passion for transforming the livestock sector in Nigeria. Comprising
        skilled professionals from diverse backgrounds, our team is united by a
        shared commitment to driving positive change.
      </p>

      <div className="grid items-start gap-6 min-[600px]:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-3xl overflow-hidden relative shadow-sm w-full max-w-[400px] mx-auto"
          >
            <img
              loading="lazy"
              className="w-full h-[300px] object-cover object-center"
              src={member.image}
              alt="fatima usman"
            />
            <div className="absolute p-2 flex flex-col items-center rounded-3xl bottom-3 left-2 right-2 bg-gradient-to-r from-white/80 to-white/20 backdrop-blur-lg">
              <p className="inline-block text-md py-[6px] px-4 mb-1 rounded-full bg-gray-900/20 backdrop-blur-lg font-semibold text-green-900">
                {member.name}
              </p>
              <p className="text-gray-700">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LPRESTeampage;
