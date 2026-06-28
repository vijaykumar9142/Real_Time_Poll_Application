import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">
        PollHub
      </h1>

      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/create-poll">
          Create Poll
        </Link>
        <Link to="/account">
          Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;