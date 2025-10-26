import AOS from 'aos';
import 'aos/dist/aos.css';
import FrameworkSection from './components/FrameworkSection';
import HeaderSection from './components/HeaderSection';
import ValueChainsSection from './components/ValueChainsSection';
import FooterSection from './components/FooterSection';

const App = () => {
  AOS.init({
    duration: 500,
    once: false,
    easing: 'ease-in',
  });

  return (
    <div>
      <HeaderSection />
      <ValueChainsSection />
      <FrameworkSection />
      <FooterSection />
    </div>
  );
};

export default App;
