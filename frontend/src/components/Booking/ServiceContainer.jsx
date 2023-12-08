import React from 'react';

const ServiceContainer = ({ selectedServices, onCancelService }) => {
  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.room.price, 0);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Selected Services</h2>
      {selectedServices.map((service, index) => (
        <div key={index} className="mb-4 border p-4">
          {service.room && (
            <div>
              <h3 className="text-lg font-bold">Selected Room:</h3>
              <p>{`Room: ${service.room.roomType} - Price: Ksh ${service.room.price}`}</p>
              <button
                onClick={() => onCancelService(index)}
                className="bg-red-500 text-white p-2 rounded cursor-pointer mt-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Total Price:</h3>
        <span>Ksh {calculateTotalPrice()}</span>
      </div>
    </div>
  );
};

export default ServiceContainer;
