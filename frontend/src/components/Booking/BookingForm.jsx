import React, { useState } from 'react';
import ServiceForm1 from './ServiceForm1';
import ServiceForm2 from './ServiceForm2';

const BookingForm = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  const handleTotalPriceChange = (servicePrice) => {
    // Accumulate the total price in the BookingForm
    setTotalPrice((prevTotal) => prevTotal + servicePrice);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <label>Select a Service:</label>
        <select onChange={(e) => handleServiceChange(e.target.value)} value={selectedService || ''}>
          <option value="">Select...</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          {/* Add more service options as needed */}
        </select>

        <div>
          {selectedService === 'service1' && (
            <ServiceForm1 onTotalPriceChange={handleTotalPriceChange} />
          )}
          {selectedService === 'service2' && (
            <ServiceForm2 onTotalPriceChange={handleTotalPriceChange} />
          )}
          {/* Add a default case or error handling here */}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Selected Service:</h2>
        {selectedService && (
          <p>
            {selectedService.name} - ${selectedService.price}
          </p>
        )}

        <h2>Total Price:</h2>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default BookingForm;
