import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import BookingForm from './BookingForm';
import ShoppingCart from './ShoppingCart';

const ContactForm = ({ value, onChange }) => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
  });
  const [startDate, setStartDate] = useState(null);

  // Define the allowed time range
  const allowedStartTime = new Date();
  allowedStartTime.setHours(7, 0, 0); // 7:00 AM

  const allowedEndTime = new Date();
  allowedEndTime.setHours(18, 0, 0); // 6:00 PM

  const updateShoppingCart = (newCartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.service === newCartItem.service
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevItems];
        updatedCart[existingItemIndex] = newCartItem;
        return updatedCart;
      } else {
        return [...prevItems, newCartItem];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can perform further actions, such as sending data to a server
  };

  return (
    <>
    <h2 className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>Book Online</h2>
    <div className='lg:flex'>
      <div className='mx-auto items-left '>
          <BookingForm updateShoppingCart={updateShoppingCart} />
          <div className="flex flex-col items-left  mx-auto p-4">
          <h2 className="text-xl font-bold mb-4 text-customBlue font-signature">Contact Information</h2>
          <p className="text-left mb-4">
            The information will be used to contact you about your service
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            {/* First Row */}
            <div className="flex mb-4">
              <div className="w-full mr-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="w-full ml-2">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex">
              <div className="w-full mr-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="w-full ml-2">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              {/* Add another input field here if needed */}
            </div>
          </form>
        </div>
        
        <div className="flex flex-col items-left  mx-auto p-4">
          <h2 className="text-xl font-bold mb-4 text-customBlue font-signature">Service Address</h2>
          <p className=" mb-4">Where would you like us to clean?</p>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Building name"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col items-left  mx-auto p-4">
          <h1 className="text-xl font-bold mb-4 text-customBlue font-signature">When would you like us to come?</h1>
          <form className="w-full max-w-md">
            {/* Date Input */}
            <div className="mb-4 relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Pick a day"
                showTimeSelect
                timeIntervals={30}
                timeFormat="h:mm aa"
                minDate={new Date()}
                minTime={allowedStartTime}
                maxTime={allowedEndTime}
                timeInputLabel="Time"
                className="custom-date-picker-style px-3 py-2 border rounded pl-8 cursor-pointer block appearance-none leading-5"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
          </form>
        </div>
        </div>
        <div className="lg:flex lg:w-1/3 mx-auto p-4 ">
     
          <ShoppingCart cartItems={cartItems} />
         
        </div>
        
      </div>
      <div className="items-left mx-auto p-4">
      <button  className='bg-customBlue text-white text-base px-6 py-2 rounded-md  hover:bg-sky hover:text-customBlue cursor-pointer'type="button">Book Now</button>
      </div>
      </>
  );
};

export default ContactForm;
