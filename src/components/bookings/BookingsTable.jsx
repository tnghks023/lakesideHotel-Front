import React, { useEffect, useState } from "react";
import DateSlider from "../common/DateSlider";
import moment from "moment";

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
  const [filteredBookings, setFilteredBookings] = useState(bookingInfo);

  const filterBookings = (startDate, endDate) => {
    let filtered = bookingInfo;
    if (startDate && endDate) {
      filtered = bookingInfo.filter((booking) => {
        const bookingStartDate = new Date(
          booking.checkInDate[0],
          booking.checkInDate[1] - 1,
          booking.checkInDate[2]
        );
        const bookingEndDate = new Date(
          booking.checkOutDate[0],
          booking.checkOutDate[1] - 1,
          booking.checkOutDate[2]
        );

        return (
          bookingStartDate >= startDate &&
          bookingEndDate <= endDate &&
          bookingEndDate > startDate
        );
      });
    }
    setFilteredBookings(filtered);
  };

  useEffect(() => {
    setFilteredBookings(bookingInfo);
  }, [bookingInfo]);

  return (
    <section className="p-4">
      <DateSlider
        onDateChange={filterBookings}
        onFilterChange={filterBookings}
      />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Booking Id</th>
            <th>Room ID</th>
            <th>Room Type</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Total Guest</th>
            <th>Confirmation Code</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredBookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.id}</td>
              <td>{booking.room.id}</td>
              <td>{booking.room.roomType}</td>
              <td>
                {moment(
                  new Date(
                    booking.checkInDate[0],
                    booking.checkInDate[1] - 1,
                    booking.checkInDate[2]
                  )
                ).format("YYYY-MM-DD")}
              </td>
              <td>
                {moment(
                  new Date(
                    booking.checkOutDate[0],
                    booking.checkOutDate[1] - 1,
                    booking.checkOutDate[2]
                  )
                ).format("YYYY-MM-DD")}
              </td>

              <td>{booking.guestFullName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.numberOfAdults}</td>
              <td>{booking.numberOfChildren}</td>
              <td>{booking.totalNumOfGuest}</td>
              <td>{booking.bookingConfirmationCode}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleBookingCancellation(booking.id);
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredBookings.length === 0 && (
        <p>No booking found for selected dates</p>
      )}
    </section>
  );
};

export default BookingsTable;
