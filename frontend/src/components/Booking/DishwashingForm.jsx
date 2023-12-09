// DishwashingForm.js
import React, { useState } from 'react';

const DishwashingForm = () => {
  const [quantity, setQuantity] = useState(0);
  const [utensils, setUtensils] = useState(0);
  const [appliances, setAppliances] = useState(0);
  const [cookware, setCookware] = useState(0);
  const [containers, setContainers] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleInputChange = (e, category) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (category === 'quantity') {
      setQuantity(value);
    } else if (category === 'utensils') {
      setUtensils(value);
    } else if (category === 'appliances') {
      setAppliances(value);
    } else if (category === 'cookware') {
      setCookware(value);
    } else if (category === 'containers') {
      setContainers(value);
    }
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    const utensilsPrice = utensils * 0.5; // You can adjust pricing as needed
    const appliancesPrice = appliances * 2; // You can adjust pricing as needed
    const cookwarePrice = cookware * 1.25; // You can adjust pricing as needed
    const containersPrice = containers * 1; // You can adjust pricing as needed
    const total = (quantity + utensilsPrice + appliancesPrice + cookwarePrice + containersPrice) * 1.5; // Adjust pricing as needed
    setTotalPrice(total);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Utensils (Mugs, Plates, Glasses):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={quantity}
          onChange={(e) => handleInputChange(e, 'quantity')}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Utensils (seive, spoons, knives, chopping boards, sticks):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={utensils}
          onChange={(e) => handleInputChange(e, 'utensils')}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Appliances (blender, toaster, microwave, cooker, fridge, kettle):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={appliances}
          onChange={(e) => handleInputChange(e, 'appliances')}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Cookware (pans, sufurias, cooking pots):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={cookware}
          onChange={(e) => handleInputChange(e, 'cookware')}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Food Storage Containers:</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={containers}
          onChange={(e) => handleInputChange(e, 'containers')}
        />
      </div>
      {/*<div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div> */}  
    </div>
  );
};

export default DishwashingForm;
