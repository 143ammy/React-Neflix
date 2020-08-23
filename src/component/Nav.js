import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix_logo"
      />

      <img
        className="avtar"
        src="https://cdn4.iconfinder.com/data/icons/mayssam/512/user-512.png"
        alt="Netflix_logo"
      />
    </div>
  );
}

export default Nav;
