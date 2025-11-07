import AOS from 'aos';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  AOS.init({
    duration: 400,
    once: false,
    easing: 'ease-in',
  });
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
