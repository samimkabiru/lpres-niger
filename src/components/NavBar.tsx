const NavBar = () => {
  const navRoutes = [
    { name: 'Home', path: '#' },
    {
      name: 'About',
      path: '#',
      children: [
        { name: 'About L-Pres', path: '#' },
        { name: 'The L-Pres Team', path: '#' },
      ],
    },
    { name: 'Events', path: '#' },
    { name: 'News', path: '#' },
    { name: 'Contact', path: '#' },
    { name: 'Staff Mail', path: '#' },
    { name: 'Projects', path: '#' },
  ];

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#">
            <img
              src="src/assets/logo.webp"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navRoutes.map((route, index) =>
                !route.children ? (
                  <li key={index}>
                    <a
                      href={route.path}
                      className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                    >
                      {route.name}
                    </a>
                  </li>
                ) : (
                  <li key={index}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto"
                    >
                      {route.name}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdownNavbar"
                      className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {route.children.map((route) => (
                          <li key={route.name}>
                            <a
                              href={route.path}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {route.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
