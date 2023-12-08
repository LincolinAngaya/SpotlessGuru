import React, { useState } from 'react';
import DishwashingForm from './DishwashingForm';
import HouseCleaningForm from './HouseCleaningForm';
import ClothesHandWashingForm from './ClothesHandWashingForm';

const ServiceForm = ({ onServiceSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const renderServiceForm = () => {
    switch (selectedCategory) {
      case 'dishwashing':
        return <DishwashingForm onServiceSelect={onServiceSelect} />;
      case 'housecleaning':
        return <HouseCleaningForm onServiceSelect={onServiceSelect} />;
      case 'clotheswashing':
        return <ClothesHandWashingForm onServiceSelect={onServiceSelect} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <form className="mb-4">
        <label className="block mb-2 font-bold">Select Service Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="dishwashing">Dishwashing</option>
          <option value="housecleaning">House Cleaning</option>
          <option value="clotheswashing">Clothes Washing</option>
        </select>
      </form>

      {/* Render the selected service form */}
      {renderServiceForm()}
    </div>
  );
};

export default ServiceForm;
