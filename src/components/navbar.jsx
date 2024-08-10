import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white fixed left-4 right-4 lg:left-0 lg:right-0 mx-auto lg:max-w-6xl top-0 py-8 flex justify-between items-center">
      <a href="/" className="px-1 transition hover:text-primary">
        <h2 className="text-xl font-black text-black">ayoublefhim</h2>
      </a>
      <div>
        <Link to="/blog" className="px-1 transition hover:text-primary">
          Blog
        </Link>
        /
        <Link to="/agenda" className="px-1 transition hover:text-primary">
          Agenda
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
