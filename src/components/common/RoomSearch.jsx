import React, { useState } from "react";
import { getAvailableRooms } from "../utils/ApiFunctions";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import RoomTypeSelectorNoAdd from "./RoomTypeSelectorNoAdd";
import RoomTypeSelector from "./RoomTypeSelector";
import RoomSearchResult from "./RoomSearchResult";
import moment from "moment";

const RoomSearch = () => {
  const [searchQuery, setSearchQuery] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const checkIn = moment(searchQuery.checkInDate);
    const checkOut = moment(searchQuery.checkOutDate);
    if (!checkIn.isValid() || !checkOut.isValid()) {
      setErrorMessage("Please, Enter valid date range");
      setAvailableRooms([]);
      return;
    }
    if (checkIn.isSameOrAfter(checkOut)) {
      setErrorMessage("Check-In Date must come before Check-Out Date");
      setAvailableRooms([]);
      return;
    }
    setIsLoading(true);
    getAvailableRooms(
      searchQuery.checkInDate,
      searchQuery.checkOutDate,
      searchQuery.roomType
    )
      .then((response) => {
        setAvailableRooms(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }),
          2000;
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
    const checkIn = moment(searchQuery.checkInDate);
    const checkOut = moment(searchQuery.checkOutDate);
    if (checkIn.isValid() && checkOut.isValid()) {
      setErrorMessage("");
    }
  };

  const clearSearch = () => {
    setSearchQuery({
      checkInDate: "",
      checkOutDate: "",
      roomType: "",
    });
    setAvailableRooms([]);
  };

  return (
    <>
      <Container className="mt-5 mb-5 py-5 shadow">
        <Form onSubmit={handleSearch}>
          <Row className="justify-content-center">
            <Col xs={12} md={3}>
              <Form.Group controlid="checkInDate">
                <Form.Label>Check_in date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  value={searchQuery.checkInDate}
                  onChange={handleInputChange}
                  min={moment().format("YYYY-MM-DD")}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Check_Out date</Form.Label>
                <Form.Control
                  controlid="checkOutDate"
                  type="date"
                  name="checkOutDate"
                  value={searchQuery.checkOutDate}
                  onChange={handleInputChange}
                  min={moment().format("YYYY-MM-DD")}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Room Type</Form.Label>
                <div className="d-flex">
                  <RoomTypeSelectorNoAdd
                    handleRoomInputChange={handleInputChange}
                    newRoom={searchQuery}
                  />
                  <Button variant="secondary" type="submit" className="ms-2">
                    Search
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        {isLoading ? (
          <p>finding available rooms....</p>
        ) : errorMessage ? (
          <p className="text-danger">{errorMessage}</p>
        ) : availableRooms ? (
          <RoomSearchResult
            onClearSearch={clearSearch}
            results={availableRooms}
          />
        ) : (
          <p>No rooms available for the selected dates and room type</p>
        )}
      </Container>
    </>
  );
};

export default RoomSearch;
