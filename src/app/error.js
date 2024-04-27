"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-2xl text-red-500 mb-3">
          This is global error component
        </h1>
        <h1 className="text-2xl text-red-500 mb-3">{error.message}</h1>
        <button onClick={() => reset()} className="btn btn-outline btn-warning">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
