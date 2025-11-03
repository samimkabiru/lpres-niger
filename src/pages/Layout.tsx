import { Outlet } from 'react-router';
import AOS from 'aos';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Layout = () => {
  AOS.init({
    duration: 300,
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
