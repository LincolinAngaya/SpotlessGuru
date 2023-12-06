import React, {  useState, useEffect, useCallback  } from 'react';

const ServiceForm1 = ({ onTotalPriceChange }) => {
    const [selectedService, setSelectedService] = useState({ name: '', price: 0 });
    const [selectedAdditionalService, setSelectedAdditionalService] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const handleServiceSelect = useCallback((serviceName, servicePrice) => {
      setSelectedService({ name: serviceName, price: servicePrice });
    }, []);
  
    const handleAdditionalServiceSelect = useCallback((serviceName, servicePrice) => {
      setSelectedAdditionalService({ name: serviceName, price: servicePrice });
    }, []);
  
    useEffect(() => {
      // Calculate total price when either selectedService or selectedAdditionalService changes
      setTotalPrice(selectedService.price + (selectedAdditionalService?.price || 0));
    }, [selectedService, selectedAdditionalService]);
  
    useEffect(() => {
      // Notify the parent component (BookingForm) about the total price change
      onTotalPriceChange(totalPrice);
    }, [totalPrice, onTotalPriceChange]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission for Service 1
    console.log('Service 1 Form Data:', selectedService, selectedAdditionalService);
    // You can send this data to your backend or perform any other action
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Select a Service:
          <select
            value={selectedService ? selectedService.name : ''}
            onChange={(e) => {
              const serviceName = e.target.value;
              const servicePrice = serviceName === 'ServiceC' ? 100 : 120; // Add more cases as needed
              handleServiceSelect(serviceName, servicePrice);
            }}
          >
            <option value="" disabled>Select a service</option>
            <option value="ServiceC">Service C - $100</option>
            <option value="ServiceD">Service D - $120</option>
            {/* Add more options for other services as needed */}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select an Additional Service:
          <select
            value={selectedAdditionalService ? selectedAdditionalService.name : ''}
            onChange={(e) => {
              const serviceName = e.target.value;
              const servicePrice = serviceName === 'ServiceE' ? 80 : 90; // Add more cases as needed
              handleAdditionalServiceSelect(serviceName, servicePrice);
            }}
          >
            <option value="" disabled>Select an additional service</option>
            <option value="ServiceE">Service E - $80</option>
            <option value="ServiceF">Service F - $90</option>
            {/* Add more options for other additional services as needed */}
          </select>
        </label>
      </div>

      <div>
        <h3>Selected Service:</h3>
        {selectedService && (
          <p>{selectedService.name} - ${selectedService.price}</p>
        )}

        <h3>Selected Additional Service:</h3>
        {selectedAdditionalService && (
          <p>{selectedAdditionalService.name} - ${selectedAdditionalService.price}</p>
        )}

        <h3>Total Price: ${totalPrice}</h3>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ServiceForm1;
