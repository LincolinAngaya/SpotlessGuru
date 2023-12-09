import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="mt-4">
      <h2>Shopping Cart:</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div>
               
                {item.clothesService && <p>Clothes category: {item.clothesService}</p>}
                {item.beddingService && <p>Duvet Size: {item.beddingService}</p>}
                {item.shoeQuantity > 0 && <p>Number of Shoes: {item.shoeQuantity}</p>}
                {item.roomType && <p>Room Type: {item.roomType}</p>}
                {item.utensils && <p>Utensils: {item.utensils}</p>}
                
                <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
