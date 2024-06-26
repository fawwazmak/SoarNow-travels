import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-warning-subtle py-5">
        <Container className="d-flex flex-column flex-md-row justify-content-between ">
          <div>
            <p className="fw-bold fs-5">Servces</p>
          </div>

          <div>
            <p className="fw-bold fs-5">About Us</p>

            <ul>
              <li>About Us</li>
              <li>Travel Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="fw-bold fs-5">Support</p>

            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Airline Information</li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
