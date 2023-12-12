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
    <>
      <div className='text-center mx-auto'>
        <h1 className='text-xl font-bold mb-4 text-customBlue font-signature'>Choose your category</h1>
        <p>Select your service category</p>
      </div>

      <div className="flex flex-col items-center justify-center h-screen w-full mb-20">
        <form className="mb-36">
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
        <ShoppingCart cartItems={cartItems} />
      </div>
    </>
  );
}

export default BookingForm;
