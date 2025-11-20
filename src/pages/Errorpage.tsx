import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
  const error = useRouteError();

  return (
    <div className="text-center px-4 py-24">
      {isRouteErrorResponse(error) && (
        <h1 className="font-bold text-green-950 text-6xl lg:text-9xl">404</h1>
      )}
      <p className="uppercase mt-4 text-2xl text-gray-700 font-bold lg:text-3xl">
        {isRouteErrorResponse(error) && 'oops! page not found'}
      </p>
      <p className="sm:text-2xl mt-2">
        {isRouteErrorResponse(error)
          ? "Sorry, the page you're looking for doesn't exist."
          : 'Sorry, an unexpected error occurred.'}
      </p>
      {isRouteErrorResponse(error) && (
        <Link
          className="mt-3 inline-block hover:underline text-green-900"
          to="/"
        >
          Back to Homepage
        </Link>
      )}
    </div>
  );
};

export default Errorpage;
