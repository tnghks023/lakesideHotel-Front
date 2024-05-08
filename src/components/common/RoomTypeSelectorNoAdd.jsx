import React, { useEffect, useState, useMemo } from "react";
import { getRoomTypes } from "../utils/ApiFunctions";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);

  const roomTypeOptions = useMemo(() => {
    return roomTypes.map((type, index) => (
      <option key={index} value={type}>
        {type}
      </option>
    ));
  }, [roomTypes]);

  return (
    <>
      {roomTypes.length >= 0 && (
        <div>
          <select
            required
            aria-label="Select a room type"
            className="form-select"
            name="roomType"
            onChange={(e) => {
              handleRoomInputChange(e);
            }}
            value={newRoom.roomType}
          >
            <option value={""}>Select a room type</option>
            {roomTypeOptions}
          </select>
        </div>
      )}
    </>
  );
};

export default RoomTypeSelector;
