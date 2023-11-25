import React, { useState } from "react";

const Systemtype = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCheckboxChange = (itemId) => {
    setSelectedItem(itemId);
  };

  const renderSelectedItemDetails = () => {
    // Depending on the selected item, render the corresponding details
    switch (selectedItem) {
      case "station":
        return <p>Details for Central Station</p>;
      case "fire":
        return <p>Details for Fire Pump</p>;
      case "jockey":
        return <p>Details for Jockey Pump</p>;
      case "local":
        return <p>Details for Local Pump</p>;
      default:
        return null;
    }
  };

  return (
    <div className="mb-3 mt-5">
      <h3>Type of Building</h3>
      <div className="d-flex flex-column">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="station"
            name="station"
            checked={selectedItem === "station"}
            onChange={() => handleCheckboxChange("station")}
          />
          <label className="form-check-label" htmlFor="station">
            Central Station
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="fire"
            name="fire"
            checked={selectedItem === "fire"}
            onChange={() => handleCheckboxChange("fire")}
          />
          <label className="form-check-label" htmlFor="fire">
            Fire Pump
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="jockey"
            name="jockey"
            checked={selectedItem === "jockey"}
            onChange={() => handleCheckboxChange("jockey")}
          />
          <label className="form-check-label" htmlFor="jockey">
            Jockey Pump
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="local"
            name="local"
            checked={selectedItem === "local"}
            onChange={() => handleCheckboxChange("local")}
          />
          <label className="form-check-label" htmlFor="local">
            Local Pump
          </label>
        </div>
      </div>

      <div className="mt-3">
        {renderSelectedItemDetails()}
      </div>
    </div>
  );
};

export default Systemtype;
