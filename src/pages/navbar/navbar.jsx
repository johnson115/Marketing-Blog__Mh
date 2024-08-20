import { NavLink, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import "../hero/hero.css";
const Navbar = () => {
  const [Mobile, setMobile] = useState("hidden");
  const looog =require("../../media/logo (2).png");

  return (
    <nav className=" fixed w-full z-20 top-0 start-0 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto navv">
        <AnchorLink href="#home">
        <Link to="/" className="flex items-center">
        <img src={looog} className="mah" alt="logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap logos">
          DIgital Move Up
          </span>
        </Link>
        </AnchorLink>
        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={() => {
              setMobile(Mobile === "hidden" ? " " : "hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`w-full naving md:block md:w-auto ${Mobile}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
            <AnchorLink href="#home">
              <NavLink
                to="/"
                className=" route block py-2 pr-4 pl-3 text-white border-b border-gray-100   md:border-0  md:p-0 "
                aria-current="page"
              >
                Home
              </NavLink>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#we"
                className="route block py-2 pr-4 pl-3 text-white border-b border-gray-100   md:border-0  md:p-0 "
              >
                <NavLink to="/Service">
                Service
                </NavLink>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#about"
                className="route block py-2 pr-4 pl-3 text-white border-b border-gray-100   md:border-0  md:p-0 "
              >
                <NavLink to="/about-us">
                About us
                </NavLink>
              </AnchorLink>
            </li>

            <li>
              <AnchorLink
                href="#contact"
                className="route block py-2 pr-4 pl-3 text-white border-b border-gray-100   md:border-0  md:p-0 "
              >
                <NavLink to="/contact">
                Contact
                </NavLink>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
