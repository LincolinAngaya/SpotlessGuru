import React, { useState, useEffect } from 'react';

const HouseCleaningForm = ({ updateShoppingCart }) => {
  const [selectedRoomType, setSelectedRoomType] = useState('');

  const roomTypes = ['Two_Bedroom', 'Studio','Single_Room', 'Twin', 'Bed_Sitter','Cluster',  'One_Bedroom','Premium'  ];
  
  const prices = {
   
    
    Two_Bedroom: 1000,
    One_Bedroom: 900,
    Premium: 800,
    Bed_Sitter: 700,
    Studio: 700,
    Twin: 750,
    Single_Room: 450,
    Cluster: 500,
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (selectedRoomType && prices[selectedRoomType]) {
        return prices[selectedRoomType];
      }
      return 0;
    };

    updateShoppingCart({
      service: 'House Cleaning',
      roomType: selectedRoomType,
      price: calculateTotalPrice(),
      totalPrice: calculateTotalPrice(),
    });
  }, [selectedRoomType, updateShoppingCart]);

  return (
    <div>
    <div className="rounded-md border p-4 mb-8 mx-auto mt-4 items-left shadow-md">
        <label className="mt-4 font-bold text-customBlue">Select Room Type:</label>
        <select
          className="p-2 text-lg border rounded-md mt-8 text-customBlue"
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
