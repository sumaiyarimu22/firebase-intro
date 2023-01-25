import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between container mx-auto items-center py-5 border-b">
      <Link to="/" className="font-medium text-orange-500 text-2xl">
        Fire<span className="italic">ba</span>se ki
        <span className="italic">ll</span>er
      </Link>
      <ul className="links flex gap-10">
        <li>
          <Link to="/" className="hover:text-orange-500 duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-orange-500 duration-300">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-orange-500 duration-300">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
