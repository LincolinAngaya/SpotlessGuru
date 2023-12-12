import React, { useState } from 'react';
import ClothesHandWashingForm from './ClothesHandWashingForm';
import DishwashingForm from './DishwashingForm';
import HouseCleaningForm from './HouseCleaningForm';
import ShoppingCart from './ShoppingCart';

function BookingForm() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

  const updateShoppingCart = (newCartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.service === newCartItem.service
      );

      if (existingItemIndex !== -1) {
        // If the service already exists, update the existing item
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex] = newCartItem;
        return updatedCart;
      } else {
        // If the service doesn't exist, add it to the cart
        return [...prevItems, newCartItem];
      }
    });
  };

  return (
    <div className="flex">
      {/* Left side with category selection and forms */}
      <div className="flex flex-col items-center w-2/3 p-4">
        <div className='text-center mx-auto'>
          <h1 className='text-xl font-bold mb-4 text-customBlue font-signature'>Choose your category</h1>
          <p>Select your service category</p>
        </div>

        <form className="mb-8">
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

      {/* Right side with shopping cart */}
      <div className="w-1/3 p-4">
        <ShoppingCart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default BookingForm;
