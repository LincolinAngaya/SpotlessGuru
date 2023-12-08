import React, { useState } from 'react';

const ClothesHandWashingForm = () => {
  const [clothesSize, setClothesSize] = useState('');
  const [duvetSize, setDuvetSize] = useState('');

  const handleClothesSizeChange = (e) => {
    setClothesSize(e.target.value);
  };

  const handleDuvetSizeChange = (e) => {
    setDuvetSize(e.target.value);
  };

  // Add pricing logic based on the selected sizes
  const calculatePrice = () => {
    // Your pricing logic here
    return 20; // Placeholder pricing logic
  };

  return (
    <div>
      <label className="block mb-2 font-bold">Select Clothes Size:</label>
      <select
        value={clothesSize}
        onChange={handleClothesSizeChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label className="block mt-4 mb-2 font-bold">Select Duvet Size:</label>
      <select
        value={duvetSize}
        onChange={handleDuvetSizeChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Size</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="queen">Queen</option>
      </select>

      <p>Total Price: ${calculatePrice()}</p>
    </div>
  );
};

export default ClothesHandWashingForm;
