import React, { useState } from "react";

const Systemtype = () => {
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
          />
          <label className="form-check-label" htmlFor="local">
            Local Pump
          </label>
        </div>
      </div>
    </div>
  );
};

export default Systemtype;

