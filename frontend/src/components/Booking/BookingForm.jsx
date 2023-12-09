import React, { useState } from 'react';
import ServiceForm from './ServiceForm1';

const BookingForm = () => {
    const [selectedServices, setSelectedServices] = React.useState([]);
    const [allSelectedItems, setAllSelectedItems] = React.useState([]);
    const prices = {
      item1: 10,
      item2: 20,
      item3: 30,
    };
  
    const availableItems = {
      dishwashing: ['item1', 'item2', 'item3', 'item4'], // Customize for Dishwashing
      housecleaning: ['premium', 'studio', 'cluster', 'twin', 'bedsitter', 'single room'], // Customize for House Cleaning
      handwashing: ['item1', 'item2', 'item3', 'item4'], // Customize for Hand Washing
    };
  
    const handleServiceChange = (service) => {
      setSelectedServices((prevSelectedServices) => [...prevSelectedServices, service]);
    };
  
    const handleItemChange = (service, item) => {
      const newSelectedItem = { service, item };
  
      setAllSelectedItems((prevAllSelectedItems) => [
        ...prevAllSelectedItems.filter((selected) => selected.service !== service),
        newSelectedItem,
      ]);
  
      // Update the selected items for the specific service
      setSelectedServices((prevSelectedServices) => {
        const index = prevSelectedServices.indexOf(service);
        const updatedSelectedServices = [...prevSelectedServices];
        updatedSelectedServices[index] = newSelectedItem;
  
        return updatedSelectedServices;
      });
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
          <option value="dishwashing">Dishwashing</option>
          <option value="housecleaning">House Cleaning</option>
          <option value="handwashing">Hand Washing</option>
        </select>
  
        {selectedServices.map((selectedService, index) => (
          <div key={index}>
            <h3>Selected Items:</h3>
            <ServiceForm
              service={selectedService}
              selectedItems={selectedServices}
              handleItemChange={handleItemChange}
              availableItems={availableItems[selectedService]}
              label={`Select Item for ${selectedService}`}
            />
            {/* Add more ServiceForms with different labels as needed */}
          </div>
        ))}
  
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