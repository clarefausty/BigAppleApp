import React from 'react'

const Signage = () => {
  return (
    <div className="mb-3 mt-5">
      <h3>Signage</h3>
      <div className="d-flex flex-column">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="curbbox"
            name="curbbox"
          />
          <label className="form-check-label" htmlFor="curbbox">
            Combo Curb Box
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="combolocation"
            name="combolocation"
          />
          <label className="form-check-label" htmlFor="combolocation">
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
  )
}

export default Signage