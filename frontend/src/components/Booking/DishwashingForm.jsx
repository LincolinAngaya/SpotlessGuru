// DishwashingForm.js
import React, { useState, useEffect } from 'react';

const DishwashingForm = ({ updateShoppingCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [utensils, setUtensils] = useState(0);
  const [appliances, setAppliances] = useState(0);
  const [cookware, setCookware] = useState(0);
  const [containers, setContainers] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const utensilsPrice = utensils * 0.5; // You can adjust pricing as needed
      const appliancesPrice = appliances * 2; // You can adjust pricing as needed
      const cookwarePrice = cookware * 1.25; // You can adjust pricing as needed
      const containersPrice = containers * 1; // You can adjust pricing as needed
      const total = (quantity + utensilsPrice + appliancesPrice + cookwarePrice + containersPrice) * 1.5; // Adjust pricing as needed
      return total;
    };

    updateShoppingCart({
      service: 'Dishwashing',
      quantity: quantity,
      utensils: utensils,
      appliances: appliances,
      cookware: cookware,
      containers: containers,
      totalPrice: calculateTotalPrice(),
    });
  }, [quantity, utensils, appliances, cookware, containers]);

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Utensils (Mugs, Plates, Glasses):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Utensils (seive, spoons, knives, chopping boards, sticks):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={utensils}
          onChange={(e) => setUtensils(parseInt(e.target.value, 10) || 0)}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Appliances (blender, toaster, microwave, cooker, fridge, kettle):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={appliances}
          onChange={(e) => setAppliances(parseInt(e.target.value, 10) || 0)}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Cookware (pans, sufurias, cooking pots):</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={cookware}
          onChange={(e) => setCookware(parseInt(e.target.value, 10) || 0)}
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">Food Storage Containers:</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md"
          value={containers}
          onChange={(e) => setContainers(parseInt(e.target.value, 10) || 0)}
        />
      </div>
    </div>
  );
};

export default DishwashingForm;
