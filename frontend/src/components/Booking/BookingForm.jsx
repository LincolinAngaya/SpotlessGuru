import React, { useState } from 'react';
import ClothesHandWashingForm from './ClothesHandWashingForm';
import DishwashingForm from './DishwashingForm';
import HouseCleaningForm from './HouseCleaningForm';

function BookingForm({ updateShoppingCart }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

  return (
   
      <div className="items-left mx-auto p-4">
        <div className='text-left mx-auto'>
          <h1 className='text-xl font-bold mb-4 text-customBlue font-signature'>Choose your category</h1>
          <p>Select your service category</p>
        </div>

        <form  className="w-full max-w-md">
          <select
            className="p-2 text-lg border w-full rounded-md"
            id="services"
            name="services"
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="clothes-handwashing">Clothes Handwashing</option>
            <option value="dishwashing">Dishwashing</option>
            <option value="house-cleaning">House Cleaning</option>
          </select>
        </form>

        {selectedCategory === 'clothes-handwashing' && (
          <form>
            <ClothesHandWashingForm updateShoppingCart={updateShoppingCart} />
          </form>
        )}
        {selectedCategory === 'dishwashing' && (
          <form>
            <DishwashingForm updateShoppingCart={updateShoppingCart} />
          </form>
        )}
        {selectedCategory === 'house-cleaning' && (
          <form>
            <HouseCleaningForm updateShoppingCart={updateShoppingCart} />
          </form>
        )}
      </div>
  
  );
}

export default BookingForm;
