import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>HI, I am Ashwani Kumar Tiwari</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Software Developer",
            "Problem Solving",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="contacts" className="btn-main-offer" href="#">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header
