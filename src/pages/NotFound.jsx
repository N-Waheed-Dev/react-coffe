import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f5f0]">
      <h1 className="text-9xl font-black text-[#3d2314]">404</h1>
      <p className="text-2xl font-bold text-[#7f5539] mt-4 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-[#3d2314] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5c3d2e] duration-200 shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;