import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';


const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
  });
  const handleInputClick = (inputName) => {
    document.getElementById(`hidden${inputName}Input`).click();
  };
  const handleInputDateChange = (e) => {
    const { name, value } = e.target;
    setDateTime((prevDateTime) => ({
      ...prevDateTime,
      [name]: value,
    }));
  };


  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions, such as sending data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <>
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-customBlue">Contact Information</h2>
      <p className="text-center mb-4">
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
              name="name"
              value={formData.email}
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
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4 text-customBlue">Service Address</h2>
      <p className="text-center mb-4">Where would you like us to clean?</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Your Address"
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
            placeholder="City"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>


      </form>
    </div>
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4 text-customBlue">When would you like us to come?</h1>
      <form className="w-full max-w-md">
      {/* Date Input */}
      <div className="mb-4 relative">
        <input
          type="date"
          name="date"
          value={dateTime.date}
          onChange={handleInputDateChange}
          className="w-full px-3 py-2 border rounded pl-8 cursor-pointer"
          required
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
      </div>

      {/* Time Input */}
      <div className="mb-4 relative">
        <input
          type="time"
          name="time"
          placeholder="Pick a time"
          value={dateTime.time}
          onChange={handleInputDateChange}
          className="w-full px-3 py-2 border rounded pl-8 cursor-pointer"
          required
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon icon={faClock} />
        </div>
      </div>
    </form>
    </div>
    </>
  );
  
};

export default ContactForm;
