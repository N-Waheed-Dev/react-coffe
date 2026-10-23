import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="py-6 bg-[#4a2e2b] text-[#f5ebe0] shadow-2xl sticky top-0 z-50">
      <div className="container flex justify-between items-center px-4">
        <Link className="text-3xl font-serif font-bold text-[#e6ccb2]" to="/"> Coffee House </Link>
        <ul className="flex gap-6">
          <li>
            <Link className="text-lg font-bold hover:text-[#e6ccb2] duration-300" to="/">  Home </Link>
          </li>
          <li>
            <Link className="text-lg font-bold hover:text-[#e6ccb2] duration-300" to="/products"> Menu </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;