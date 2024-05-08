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

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes((currentRoomTypes) => [...currentRoomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
    }
  };

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
              if (e.target.value === "Add New") {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
            value={newRoom.roomType}
          >
            <option value={""}>Select a room type</option>
            <option value={"Add New"}>Add New</option>
            {roomTypeOptions}
          </select>
          {showNewRoomTypeInput && (
            <div className="mt-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a new room type"
                  aria-label="Enter a new room type"
                  value={newRoomType}
                  onChange={handleNewRoomTypeInputChange}
                />
                <button
                  className="btn btn-hotel"
                  type="button"
                  onClick={handleAddNewRoomType}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RoomTypeSelector;
