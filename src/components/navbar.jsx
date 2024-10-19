import { Link } from "react-router-dom";
import {ThemeToggle} from "./index.js";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white fixed left-4 right-4 lg:left-0 lg:right-0 mx-auto lg:max-w-6xl top-0 py-8 flex justify-between items-center">
      <Link to="/" className="px-1 transition hover:text-primary">
        <h2 className="text-xl font-black text-black dark:text-white">ayoublefhim</h2>
      </Link>
      <div>
        <Link to="/blog" className="px-1 transition hover:text-primary">
          Blog
        </Link>
        /
        <Link to="/agenda" className="px-1 transition hover:text-primary">
          Agenda
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
