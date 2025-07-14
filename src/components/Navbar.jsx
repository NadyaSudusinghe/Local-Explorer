import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <>
      <nav className="bg-red-600 border-b border-red-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="Local Explorer" />
                <Link
                  to={`/`}
                >
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Local Explorer
                </span>
                </Link>
                {/* <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Local Explorer
                </span> */}
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/attractions" className={linkClass}>
                    Attractions
                  </NavLink>
                  <NavLink to="/add-attraction" className={linkClass}>
                    Add Attraction
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
