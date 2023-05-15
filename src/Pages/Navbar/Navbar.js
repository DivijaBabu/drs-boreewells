import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "../Navbar/Navbar.css";
import Email from "../../Assests/mail.png";
import Contact from "../../Assests/contact.png";
import Logo from "../../Assests/logo.jpg";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import OurSkills from "../OurSkills/OurSkills";
import ContactUs from "../ContactUs/ContactUs";
export default function Navbar() {
  return (
    <Router>
      <header>
        <div>
          <div className="headerpart1">
            <div className="contactnumber">
              <img src={Email} alt="Email" />
              <a href="divijababu190702@gmail.com">
                <p>divijababu190702@gmail.com</p>
              </a>
            </div>
            <div className="contactnumber">
              <img src={Contact} alt="Contact" />
              <p>+91 123457890</p>
            </div>
          </div>
          <div className="navigation">
            <div className="imagelogo">
              <img src={Logo} alt="Logo" />
              <h2>BOREWELLS</h2>
            </div>
            <div className="navibar">
              <ul className="nav_list">
                <NavLink to="/Home" activeClassName="active">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/AboutUs" activeClassName="active">
                  <li>About Us</li>
                </NavLink>
                <NavLink to="/Services" activeClassName="active">
                  <li>Services</li>
                </NavLink>
                <NavLink to="/OurSkills" activeClassName="active">
                  <li>Our Skills</li>
                </NavLink>
                <NavLink to="/ContactUs" activeClassName="active">
                  <li>Contact Us</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/OurSkills" element={<OurSkills />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
