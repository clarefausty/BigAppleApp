import React from "react";

const Systemtype = () => {
  return (
    <div className="mb-3 mt-5">
      <h3>System Type</h3>
      <div className="d-flex flex-column">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="combo"
            name="combo"
          />
          <label className="form-check-label" htmlFor="combo">
            Combo
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="sprinkler"
            name="sprinkler"
          />
          <label className="form-check-label" htmlFor="sprinkler">
            Sprinkler
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="standpipe"
            name="standpipe"
          />
          <label className="form-check-label" htmlFor="standpipe">
            Stand Pipe
          </label>
        </div>
        
        
      </div>
    </div>
  );
};

export default Systemtype;

