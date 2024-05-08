import React from "react";
import { Container } from "react-bootstrap";

const Parallax = () => {
  return (
    <div className="parallax mb-5">
      <Container className="text-center px-5 py-5 justify-content-center">
        <div className="animated-texts bounceIn">
          <h1>
            <span className="hotel-color">Lakeside Hotel</span>
          </h1>
          <h3>
            every detail is crafted to create an unforgettable stay. From our
            warm, personalized service to our stunning natural surroundings,
            your perfect getaway awaits.
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Parallax;
