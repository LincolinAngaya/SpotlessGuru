import React, { useState } from 'react';

const HouseCleaningForm = ({ onServiceSelect }) => {
  const availableRooms = ['Premium', 'studio', 'cluster', 'twin', 'Bed_sitter', 'single'];
  const prices = {
    Premium: 900,
    studio: 800,
    cluster: 700,
    twin: 600,
    Bed_sitter: 500,
    single: 400,
  };

  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRoomChange = (e) => {
    const room = e.target.value;
    setSelectedRoom(room);
    onServiceSelect({ category: 'housecleaning', room: { roomType: room, price: prices[room] } });
  };

  return (
    <div>
      <label className="block mb-2 font-bold">Select Room:</label>
      <select
        value={selectedRoom}
        onChange={handleRoomChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Room</option>
        {availableRooms.map((roomType) => (
          <option key={roomType} value={roomType}>
            {roomType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HouseCleaningForm;
