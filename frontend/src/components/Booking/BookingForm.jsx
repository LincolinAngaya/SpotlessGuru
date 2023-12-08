import React, { useState } from 'react';
import ServiceForm from './ServiceForm';
import ServiceContainer from './ServiceContainer';

function BookingForm() {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceSelection = (service) => {
    setSelectedServices((prevServices) => [...prevServices, service]);
  };

  const handleCancelService = (index) => {
    setSelectedServices((prevServices) => {
      const updatedServices = [...prevServices];
      updatedServices.splice(index, 1);
      return updatedServices;
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Service Selection</h1>
      <ServiceForm onServiceSelect={handleServiceSelection} />
      <ServiceContainer
        selectedServices={selectedServices}
        onCancelService={handleCancelService}
      />
    </div>
  );
}

export default BookingForm;
