import React from 'react';

const ServiceForm = ({ service, selectedItems, handleItemChange, availableItems, label }) => {
    const prices = {
      item1: 10,
      item2: 20,
      item3: 30,
    };
  
    return (
      <div>
        <h3>{service} Form</h3>
  
        {/* Dropdown */}
        <label>{label}</label>
        <select
          value={selectedItems[service] || ''}
          onChange={(e) => handleItemChange(service, e.target.value)}
        >
          <option value="">Select an item</option>
          {/* Check if availableItems is an array before calling map */}
          {Array.isArray(availableItems) &&
            availableItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
  
        {/* Display selected item */}
        {selectedItems[service] && (
          <div>
            <h4>Selected Item:</h4>
            <p>{selectedItems[service]} - ${prices[selectedItems[service]]}</p>
          </div>
        )}
  
        {/* Add more dropdowns as needed */}
      </div>
    );
  };
  
export default ServiceForm;
