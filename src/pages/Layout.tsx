import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import AOS from 'aos';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  AOS.init({
    duration: 400,
    once: false,
    easing: 'ease-in',
  });

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
