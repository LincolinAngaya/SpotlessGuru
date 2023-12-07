import React, { useState } from 'react';
import ServiceForm from './ServiceForm1';

const BookingForm = () => {
    const [selectedService, setSelectedService] = React.useState(null);
    const [selectedItems, setSelectedItems] = React.useState({});
    const [allSelectedItems, setAllSelectedItems] = React.useState([]);
    const prices = {
      item1: 10,
      item2: 20,
      item3: 30,
    };
  
    const availableItems = ['item1', 'item2', 'item3', 'item4']; // Add your new item options
  
    const handleServiceChange = (service) => {
      setSelectedService(service);
      setSelectedItems((prevSelectedItems) => ({
        ...prevSelectedItems,
        [service]: prevSelectedItems[service] || '',
      }));
    };
  
    const handleItemChange = (service, item) => {
      // Ensure only one item is selected at a time
      setAllSelectedItems((prevAllSelectedItems) => [
        ...prevAllSelectedItems.filter((selected) => selected.service !== service),
        { service, item },
      ]);
  
      setSelectedItems((prevSelectedItems) => ({
        ...prevSelectedItems,
        [service]: item,
      }));
    };
  
    const calculateTotalPrice = () => {
      return allSelectedItems.reduce((total, { item }) => total + prices[item], 0);
    };
  
    return (
      <div>
        <h2>Booking Form</h2>
        <label>Select Service:</label>
        <select onChange={(e) => handleServiceChange(e.target.value)}>
          <option value="">Select a service</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
  
        {selectedService && (
          <div>
            <h3>Selected Items:</h3>
            <ServiceForm
              service={selectedService}
              selectedItems={selectedItems}
              handleItemChange={handleItemChange}
              availableItems={availableItems}
              label="Select Item"
            />
            {/* Add more ServiceForms with different labels as needed */}
          </div>
        )}
  
        <h3>All Selected Items:</h3>
        <ul>
          {allSelectedItems.map(({ service, item }, index) => (
            <li key={index}>{`${service}: ${item} - $${prices[item]}`}</li>
          ))}
        </ul>
  
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    );
  };
  
  export default BookingForm;