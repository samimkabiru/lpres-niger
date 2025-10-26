import lpresLogo from '../assets/logo.webp';

const NavBar = () => {
  const navRoutes = [
    { name: 'Home', path: '#' },
    {
      name: 'About',
      path: '#',
      children: [
        { name: 'L-Pres', path: '#' },
        { name: 'The L-Pres Team', path: '#' },
      ],
    },
    { name: 'Events', path: '#' },
    { name: 'News', path: '#' },
    { name: 'Contact', path: '#' },
    { name: 'Staff Mail', path: '#' },
  ];

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navRoutes.map((route) =>
                !route.children ? (
                  <li key={route.name}>
                    <a href={route.path}>{route.name}</a>
                  </li>
                ) : (
                  <li key={route.name}>
                    <p>{route.name}</p>
                    <ul className="p-2">
                      {route.children.map((child) => (
                        <li key={child.name}>
                          <a href={child.path}>{child.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
          <a className="text-xl font-bold cursor-pointern text-nowrap" href="#">
            <span className="text-white bg-green-700 rounded-md p-1">NG</span>
            -LPRES
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navRoutes.map((route) =>
              !route.children ? (
                <li key={route.name}>
                  <a href={route.path}>{route.name}</a>
                </li>
              ) : (
                <li key={route.name}>
                  <details>
                    <summary>{route.name}</summary>
                    <ul className="p-1 w-[200px]">
                      {route.children.map((child) => (
                        <li key={child.name}>
                          <a href={child.path}>{child.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
