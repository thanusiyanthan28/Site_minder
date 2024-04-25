import React, { useState } from 'react';

const AvailabilityCheckForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your actual Booking Engine URL and Channel Code
    const bookingEngineUrl = `https://direct-book.com/properties/bridgeparkdirect`;

    // Build the query string with selected dates
    const queryString = new URLSearchParams({
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
    });

    // Redirect user to Booking Engine with query parameters
    window.location.href = `${bookingEngineUrl}?${queryString.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="checkInDate">Check-In Date:</label>
      <input
        type="date"
        id="checkInDate"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        required
      />
      <label htmlFor="checkOutDate">Check-Out Date:</label>
      <input
        type="date"
        id="checkOutDate"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        required
      />
      <button type="submit">Check Availability</button>
    </form>
  );
};

export default AvailabilityCheckForm;
