import {
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const contactInfo = [
    {
      icon: <FaLocationDot />,
      type: 'text',
      value:
        'L-PRES Niger State Coordination Office PLOT 23 YUSUF DATTI ROAD F-LAYOUT',
    },
    {
      icon: <FaLocationDot />,
      type: 'text',
      value: 'Minna, Niger State, Nigeria',
    },
    {
      icon: <FaPhone />,
      type: 'link',
      label: 'Telephone',
      value: 'tel:+11122233344455',
    },
    {
      icon: <MdEmail />,
      type: 'link',
      label: 'Mail',
      value: 'mailto:niger@lpresnigeria.gov.ng',
    },
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Projects', path: '/projects' },
  ];

  const socialsIcons = [
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaSquareXTwitter />, link: '#' },
    { icon: <FaFacebookSquare />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
  ];

  return (
    <footer className="bg-green-50 rounded-2xl backdrop-blur-md overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="footer sm:footer-horizontal text-base-content text-sm p-4">
          <nav>
            <h6 className="footer-title">Contact Info</h6>
            {contactInfo.map((info) =>
              info.type === 'text' ? (
                <div key={info.value} className="flex items-center my-1">
                  <span className="text-lg text-green-950 mr-2">
                    {info.icon}
                  </span>
                  <p>{info.value}</p>
                </div>
              ) : (
                <a
                  href={info.value}
                  key={info.value}
                  className="link link-hover flex my-1"
                >
                  <span className="text-lg text-green-950 mr-2">
                    {info.icon}
                  </span>
                  {info.label}
                </a>
              )
            )}
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            {quickLinks.map((link) => (
              <a key={link.label} className="link link-hover" href={link.path}>
                {link.label}
              </a>
            ))}
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-success join-item bg-green-700 border-0 text-white shadow-none hover:bg-green-900">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="footer items-center px-4 rounded-2xl sm:footer-horizontal md:justify-normal">
          <aside>
            <div className="text-xl font-bold cursor-pointern text-nowrap">
              <Link to="/">
                <span className="text-white bg-green-700 rounded-md p-1">
                  NG
                </span>
                -LPRES
              </Link>
            </div>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-2 text-2xl text-green-700">
              {socialsIcons.map(({ icon, link }, index) => (
                <a
                  key={index}
                  className="cursor-pointer hover:text-green-900 transition-colors"
                  href={link}
                >
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="p-4 mt-3">
          <div className="border-t-1 pt-4 border-gray-400">
            <p className="text-xs text-gray-700">
              &copy; {date.getFullYear()} Livestock Productivity & Resilience
              Support Project (L-PRES). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
