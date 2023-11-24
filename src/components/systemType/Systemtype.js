import React from 'react'

const Systemtype = () => {
  return (
    <div className='mb-3'>
      <h3>Type of Building</h3>
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
                id="fire"
                name="fire"
              />
              <label className="form-check-label" htmlFor="fire">
                Jockey Pump
              </label>
            </div>
    </div>
  )
}

export default Systemtype