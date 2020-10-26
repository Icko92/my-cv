import React, { useState, useEffect } from "react";
import "./Header.styles.scss";
import { Link } from "react-scroll";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [clicked, setClicked] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={navbar ? "header header-change" : "header"}>
      <div className="name" style={navbar ? { display: "none" } : null}>
        Ivica Denkovski
      </div>
      <div className="logo" style={navbar ? { display: "block" } : null}>
        <img src={require("../../images/logo-white.png")} alt="icko" />
      </div>
      <div className="navigation-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="navigation" style={clicked ? { margin: "0px" } : null}>
        <Link
          activeClass="active"
          to="info"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Info
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={30}
          duration={1000}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={30}
          duration={1000}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={30}
          duration={1000}
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
