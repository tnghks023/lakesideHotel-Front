import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelService = () => {
  return (
    <>
      <Container className="mb-2">
        <Header title={"Our Services"} />

        <Row>
          <h4 className="text-center mt-3">
            Services at <span className="hotel-color"> lakeSide - </span> Hotel
            <span className="gap-2">
              <FaClock className="ml-5" /> - 24-Hour Front Desk
            </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2 ">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi />
                  WiFi
                </Card.Title>
                <Card.Text>
                  Stay connected with complimentary high-speed WiFi available
                  throughout the hotel, perfect for both leisure and business
                  needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils />
                  BreakFast
                </Card.Title>
                <Card.Text>
                  Start your day with our complimentary breakfast, offering
                  everything from pastries to hot dishes in a buffet setting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTshirt />
                  Laundry
                </Card.Title>
                <Card.Text>
                  Maintain your wardrobe with our efficient laundry services,
                  providing both dry cleaning and pressing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaCocktail />
                  Mini-bar
                </Card.Title>
                <Card.Text>
                  Enjoy the convenience of our in-room mini-bar, stocked with
                  snacks, soft drinks, and alcoholic beverages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking />
                  Parking
                </Card.Title>
                <Card.Text>
                  Utilize our secure on-site parking, available with both valet
                  and self-parking options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaSnowflake />
                  Air conditioning
                </Card.Title>
                <Card.Text>
                  Stay comfortable with adjustable in-room air conditioning,
                  perfect for any weather condition.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HotelService;
