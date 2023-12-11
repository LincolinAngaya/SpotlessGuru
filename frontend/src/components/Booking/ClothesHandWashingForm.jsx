// ClothesHandWashingForm.js
import React, { useState, useEffect } from 'react';


const ClothesHandWashingForm = ({ updateShoppingCart }) => {
  const [selectedClothesService, setSelectedClothesService] = useState('');
  const [selectedBeddingService, setSelectedBeddingService] = useState('');
  const [shoeQuantity, setShoeQuantity] = useState(0);

  const clothesServices = {
    small: 5,
    medium: 10,
    large: 15,
  };

  const beddingServices = {
    twin: 20,
    full: 25,
    queen: 30,
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
    <div>
      <div className="mb-4">
        <label className="mr-2">Select Clothes Service:</label>
        <select
          className="p-2 text-lg border rounded-md"
          value={selectedClothesService}
          onChange={(e) => setSelectedClothesService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="small">Small - $5 per cloth</option>
          <option value="medium">Medium - $10 per cloth</option>
          <option value="large">Large - $15 per cloth</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Select Bedding Service:</label>
        <select
          className="p-2 text-lg border rounded-md"
          value={selectedBeddingService}
          onChange={(e) => setSelectedBeddingService(e.target.value)}
        >
          <option value="">Select a duvet size</option>
          <option value="twin">Twin - $20 per duvet</option>
          <option value="full">Full - $25 per duvet</option>
          <option value="queen">Queen - $30 per duvet</option>
          <option value="king">King - $35 per duvet</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Number of Shoes:</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={shoeQuantity}
          onChange={(e) => setShoeQuantity(parseInt(e.target.value, 10) || 0)}
        />
      </div>

    </div>
  );
};

export default ClothesHandWashingForm;
