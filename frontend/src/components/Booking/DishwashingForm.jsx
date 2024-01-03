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
      const quantityPrice = quantity * 5.0;
      const utensilsPrice = utensils * 5.0;
      const appliancesPrice = appliances * 20;
      const cookwarePrice = cookware * 10;
      const containersPrice = containers * 10;
      const total = (quantityPrice + utensilsPrice + appliancesPrice + cookwarePrice + containersPrice) * 1;
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
    <div className="rounded-md border p-4 mb-8 mx-auto mt-4 items-left shadow-md">
      <div className="flex flex-wrap -mx-2 mb-4">
        {/* First row of inputs */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="mr-2 font-bold text-customBlue">(Mugs+ Plates+ Glasses):</label>
          <input
            type="number"
            className="p-2 text-lg border rounded-md w-full"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
          />
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="mr-2 font-bold text-customBlue">(Seive+ Spoons+ Knives+ Chopping Board+ Cooking Sticks):</label>
          <input
            type="number"
            className="p-2 text-lg border rounded-md w-full"
            value={utensils}
            onChange={(e) => setUtensils(parseInt(e.target.value, 10) || 0)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-2 mb-4">
        {/* Second row of inputs */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="mr-2 font-bold text-customBlue">(Blender+ Toaster+ Microwave+ Cooker+ Fridge+ Kettle):</label>
          <input
            type="number"
            className="p-2 text-lg border rounded-md w-full"
            value={appliances}
            onChange={(e) => setAppliances(parseInt(e.target.value, 10) || 0)}
          />
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="mr-2 font-bold text-customBlue">(Pans+ Sufurias+ Cooking Pots):</label>
          <input
            type="number"
            className="p-2 text-lg border rounded-md w-full"
            value={cookware}
            onChange={(e) => setCookware(parseInt(e.target.value, 10) || 0)}
          />
        </div>
      </div>

      {/* Third input */}
      <div className="mb-4">
        <label className="mr-2 font-bold text-customBlue">Food Storage Containers:</label>
        <input
          type="number"
          className="p-2 text-lg border rounded-md w-full"
          value={containers}
          onChange={(e) => setContainers(parseInt(e.target.value, 10) || 0)}
        />
      </div>
    </div>
  );
};

export default DishwashingForm;
