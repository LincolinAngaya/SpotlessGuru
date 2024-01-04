import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="items-left mx-auto p-4">
      <h2 className='font-signature text-customBlue font-bold'>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className='rounded-md border bg-gray-100 p-4 mt-4'>
          {cartItems.map((item, index) => (
            <div key={index} className="border-b-2 border-customBlue text-gray-500 font-signature py-2">
              <div className="flex justify-between items-center mb-2">
                <div>
                  {item.service === 'Clothes Handwashing' && (
                    <>
                      {item.clothesService && <p>Clothes - {item.clothesService}</p>}
                      {item.beddingService && <p>Bedding - {item.beddingService}</p>}
                      {item.shoeQuantity > 0 && <p>Total Shoes - {item.shoeQuantity}</p>}
                    </>
                  )}
                  {item.service === 'House Cleaning' && (
                    <>
                      {item.roomType && (
                        <p>
                         {item.roomType}
                          {item.price !== undefined && (
                            <> - Ksh {item.price.toFixed(2)}</>
                          )}
                        </p>
                      )}
                    </>
                  )}
          


                  {item.service === 'Dishwashing' && (
                    <>
                      {item.quantity > 0 && <p>Kitchenware - {item.quantity}</p>}
                      {item.utensils > 0 && <p>Kitchen Implements - {item.utensils}</p>}
                      {item.appliances > 0 && <p>Appliances - {item.appliances}</p>}
                      {item.cookware > 0 && <p>Cookware - {item.cookware}</p>}
                      {item.containers > 0 && <p>Food Containers - {item.containers}</p>}
                    </>
                  )}

                  {/* Remove the individual item total price */}
                </div>
              </div>
            </div>
          ))}
          <p className='text-customBlue font-bold mt-4'>Total Price: Ksh {calculateTotalPrice().toFixed(2)}</p>
        </div>
      ) : (
        <p className=' border-customBlue text-gray-500 font-signature'>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;