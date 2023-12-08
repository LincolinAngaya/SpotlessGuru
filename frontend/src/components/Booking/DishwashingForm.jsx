import React, { useState } from 'react';

const DishwashingForm = () => {
  const [utensils, setUtensils] = useState(0);

  const handleUtensilsChange = (e) => {
    setUtensils(parseInt(e.target.value, 10) || 0);
  };

  // Add pricing logic based on the number of utensils
  const calculatePrice = () => {
    // Your pricing logic here
    return utensils * 5; // Placeholder pricing logic
  };

  return (
    <div>
      <label className="block mb-2 font-bold">Number of Utensils:</label>
      <input
        type="number"
        value={utensils}
        onChange={handleUtensilsChange}
        className="w-full p-2 border rounded"
      />

      <p>Total Price: ${calculatePrice()}</p>
    </div>
  );
};

export default DishwashingForm;
