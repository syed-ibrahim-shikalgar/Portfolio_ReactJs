import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown({ isFromHome }) {
  const [state, setState] = useState(false);
  const showDropdown = () => {
    setState(true);
  };

  const hideDropdown = () => {
    setState(false);
  };

  return (
    <div className="lg:hidden block mt-[-20px] dropdown">
      <div
        className="dropdown-menu "
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className="text-[50px]">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        {state ? (
          <ul className="dropdown-list" onMouseEnter={showDropdown}>
            <Link to="/">Home</Link>
            <Link to="/Project">Projects</Link>
            <Link to="/Blog">Blogs</Link>
            {isFromHome && (
              <>
                <a href="#technology">Technologies</a>
                <a href="#contact-section">Contact</a>
              </>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
