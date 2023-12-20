// ClothesHandWashingForm.js
import React, { useState, useEffect } from 'react';

const ClothesHandWashingForm = ({ updateShoppingCart }) => {
  const [selectedClothesService, setSelectedClothesService] = useState('');
  const [selectedBeddingService, setSelectedBeddingService] = useState('');
  const [shoeQuantity, setShoeQuantity] = useState(0);

  const clothesServices = {
    small: 500,
    medium: 700,
    large: 900,
  };

  const beddingServices = {
    twin: 650,
    full: 750,
    queen: 850,
    king: 35,
  };

  const shoePricePerPair = 25;

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      if (selectedClothesService) {
        totalPrice += clothesServices[selectedClothesService];
      }

      if (selectedBeddingService) {
        totalPrice += beddingServices[selectedBeddingService];
      }

      if (shoeQuantity > 0) {
        totalPrice += shoeQuantity * shoePricePerPair;
      }

      return totalPrice;
    };

    updateShoppingCart({
      service: 'Clothes Handwashing',
      clothesService: selectedClothesService,
      clothesPrice: clothesServices[selectedClothesService] || 0,
      beddingService: selectedBeddingService,
      beddingPrice: beddingServices[selectedBeddingService] || 0,
      shoeQuantity: shoeQuantity,
      shoePrice: shoeQuantity * shoePricePerPair,
      totalPrice: calculateTotalPrice(),
    });
  }, [selectedClothesService, selectedBeddingService, shoeQuantity]);

  return (
    <div className="rounded-md border p-4 mb-8 mx-auto mt-4 items-left shadow-md">
    <div className="flex flex-wrap -mx-2 mb-4">
      {/* First row of inputs */}
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="mr-2 font-bold text-customBlue">Select Clothes Service:</label>
        <select
          className="p-2 text-lg border rounded-md w-full"
          value={selectedClothesService}
          onChange={(e) => setSelectedClothesService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="small">Small Bucket  Clothes ksh 500 </option>
          <option value="medium">Medium Bucket  Clothes Ksh 700 </option>
          <option value="large">Large  Bucket  Clothes Ksh 900  </option>
        </select>
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="mr-2 font-bold text-customBlue">Select Bedding Service:</label>
        <select
          className="p-2 text-lg border rounded-md w-full"
          value={selectedBeddingService}
          onChange={(e) => setSelectedBeddingService(e.target.value)}
        >
          <option value="">Select a duvet size</option>
          <option value="twin">Size 4 X 6 duvet Ksh 650</option>
          <option value="full">Size 5 X 6 duvet Ksh 750</option>
          <option value="queen">Size 6 X 6 duvet Ksh 850</option>
       
        </select>
      </div>

      <div className="w-full md:w-1/2 px-2 mb-4">
        <label className="mr-2 font-bold text-customBlue">Number of Shoes:</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md w-full"
          value={shoeQuantity}
          onChange={(e) => setShoeQuantity(parseInt(e.target.value, 10) || 0)}
        />
      </div>
    </div>
    </div>
  );
};

export default ClothesHandWashingForm;