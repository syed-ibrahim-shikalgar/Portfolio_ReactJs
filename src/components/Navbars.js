import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ isFromHome }) => {
  return (
    <>
      <nav className="navigation flex flex-row justify-between bg-gradient-to-br from-[#FF6366] to-[#cf4143] h-[90px]">
        <div className="head lg:flex w-[100%] lg:flex-row lg:justify-between">
          <div className="logo  ">
            {/* //lg:mr-[700px] */}
            <img
              className="h-[60px] mt-[15px] ml-[60px]"
              src="./images/logo.svg"
              alt="Logo"
            />
          </div>
          <div className="nav-list hidden lg:block lg:font-bold lg:text-[#3F3D56]  lg:mr-[5rem] lg:text-[20px] lg:gap-x-[40px]  lg:mt-[25px] lg:list-none lg:flex lg:flex-row">
            <li className="nav-list-items hover:underline hover:text-[#252533]">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-items hover:underline hover:text-[#252533]">
              <Link to="/Project">Projects</Link>
            </li>
            <li className="nav-list-items hover:underline hover:text-[#252533]">
              <Link to="/Blog">Blogs</Link>
            </li>
            {isFromHome && (
              <>
                <li className="nav-list-items hover:underline hover:text-[#252533]">
                  <a href="#technology">Technologies</a>
                </li>
                <li className="nav-list-items hover:underline hover:text-[#252533]">
                  <a href="#contact-section">Contact</a>
                </li>
              </>
            )}
          </div>
        </div>
        <Dropdown isFromHome={isFromHome} />
      </nav>
    </>
  );
};

export default Navbar;
