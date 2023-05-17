import React from "react";
import { NavLink } from "react-router-dom";
import map from "../Assests/map.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footsubdiv">
        <div className="aboutfoot">
          <h3>DRS BOREWELLS</h3>
          <p>
            DRS Borewells is a leading borewell drilling company in
            Dharmapuri,since 2010. We created a thriving, high-quality water
            well drilling contractor company in and around Tamilnadu. In
            Dharmapuri, we have experienced borewell staff’s. Only a few
            contractors have their own drill rig, and we are one of those
            contractors who fought to have our own drill rigs built. We were
            first in line to provide reliable and timely services to our
            customers because of our extensive expertise in the industry.
          </p>
        </div>
        <div className="quicklink">
          <h3>QUICK LINKS</h3>
          <ul className="nav_list">
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/AboutUs" activeClassName="active">
                <li> About Us</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/Services" activeClassName="active">
                <li> Services</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/OurSkills" activeClassName="active">
                <li> Our Skills</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/ContactUs" activeClassName="active">
                <li> Contact Us</li>
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="drillingservice">
          <h3>OUR DRILLING SERVICE</h3>
          <ul className="nav_list">
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/Ourskills">
                <li> 6 Inch Drilling Borewells</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/Ourskills">
                <li> 6.5 Inch Drilling Borewells</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/Ourskills">
                <li> 7 Inch Drilling Borewells</li>
              </NavLink>
            </div>
            <div className="paralink">
              <p>&rarr;</p>
              <NavLink to="/Ourskills">
                <li> 7.5 Inch Borewells</li>
              </NavLink>
            </div>
          </ul>
        </div>
        <div>
          <h3>LOCATION</h3>
          <div>
            <img src={map} alt="map" />
            <p>3456+FRC,DRS Borewells, Nallampalli, Tamil Nadu 636807</p>
          </div>
        </div>
      </div>
    </div>
  );
}
