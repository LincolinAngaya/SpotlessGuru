import React, { useState, useEffect } from 'react';

const HouseCleaningForm = ({ updateShoppingCart }) => {
  const [selectedRoomType, setSelectedRoomType] = useState('');

  const roomTypes = ['Premium', 'Studio', 'Cluster', 'Twin', 'Bed_sitter', 'Single'];
  const prices = {
    Premium: 900,
    Studio: 800,
    Cluster: 700,
    Twin: 600,
    Bed_sitter: 500,
    Single: 400,
  };


  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      if (selectedRoomType) {
        totalPrice += prices[selectedRoomType];
      }

      return totalPrice;
    };

    updateShoppingCart({
      service: 'house cleaning',
      HouseCleaning: selectedRoomType,
      totalPrice: calculateTotalPrice(),
    });
  }, [selectedRoomType]);

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Select Room Type:</label>
        <select
          className="p-2 text-lg border rounded-md"
          value={selectedRoomType}
          onChange={(e) => setSelectedRoomType(e.target.value)}
        >
          <option value="">Select a room type</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseCleaningForm;
