import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex gap-2 bg-gray-500 py-4 px-6">
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default NavBar;
