import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useTheme } from "../context/theme/useTheme";

const Layout = () => {
  let { toggle } = useTheme();

  return (
    <div>
      <header className="flex bg-amber-400 justify-between items-center px-4 py-2">
        <NavBar />

        <button onClick={toggle} className="bg-red-500 text-white px-2 py-1.5 rounded">
          light/dark
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
