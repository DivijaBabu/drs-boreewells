import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DRS1 from "../Assests/DRS7.jpeg";
import DRS2 from "../Assests/DRS4.jpeg";
import DRS3 from "../Assests/DRS1.jpeg";
import Popup from "reactjs-popup";
import Email from "./Email";
function CarouselCards() {
  const [blankpage, setBlankpage] = useState("addemail");
  const popup_menu = () => {
    setBlankpage("email_update");
  };
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={DRS1} alt="First slide" />
        <Carousel.Caption>
          <div className="carousel-caption1">
            <h2> DRS BOREWELLS</h2>
            <p> FOR CLEAN AND SATISFIED DRILLING SERVICE</p>
            <Popup
              trigger={
                <button
                  onClick={popup_menu}
                  className="carousel-caption-button"
                >
                  GET IN TOUCH
                </button>
              }
              modal
              nested
            >
              {(close) => <Email close={close} />}
            </Popup>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DRS2} alt="Second slide" />
        <Carousel.Caption>
          <div className="carousel-caption1">
            <h2> DRS BOREWELLS</h2>
            <p> FOR CLEAN AND SATISFIED DRILLING SERVICE</p>
            <Popup
              trigger={
                <button
                  onClick={popup_menu}
                  className="carousel-caption-button"
                >
                  GET IN TOUCH
                </button>
              }
              modal
              nested
            >
              {(close) => <Email close={close} />}
            </Popup>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={DRS3} alt="Second slide" />
        <Carousel.Caption>
          <div className="carousel-caption1">
            <h2> DRS BOREWELLS</h2>
            <p> FOR CLEAN AND SATISFIED DRILLING SERVICE</p>
            <Popup
              trigger={
                <button
                  onClick={popup_menu}
                  className="carousel-caption-button"
                >
                  GET IN TOUCH
                </button>
              }
              modal
              nested
            >
              {(close) => <Email close={close} />}
            </Popup>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCards;
