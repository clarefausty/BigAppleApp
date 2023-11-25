import React from 'react'

const Labour = () => {
  return (
    <div className='mt-5 mb-5'>
      <h4 className='text-center mb-4'>Labour</h4>
      <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center">
                <label htmlFor="noofmen" className="form-label w-100">
                  # of Men
                </label>
                <input
                  type="number"
                  className="form-control  py-2"
                  id="noofmen"
                  placeholder="5"
                />
              </div>
              <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center">
                <label htmlFor="noofhours" className="form-label w-100">
                  # of Hours
                </label>
                <input
                  type="number"
                  className="form-control  py-2"
                  id="noofhours"
                  placeholder="5"
                />
              </div>
              <h4 className='text-center'>Type of Labour</h4>
              <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="stright"
            name="stright"
          />
          <label className="form-check-label" htmlFor="stright">
            Stright Time
          </label>
        </div>
        {/* Overtime checkbox */}
        <div className="form-check form-check-inline w-100">
          <input
            type="checkbox"
            className="form-check-input"
            id="overtime"
            name="overtime"
          />
          <label className="form-check-label" htmlFor="overtime">
            Over Time
          </label>
        </div>
        {/* Prevailing Wage */}
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="prevailing"
            name="prevailing"
          />
          <label className="form-check-label" htmlFor="prevailing">
            Prevailing Wage
          </label>
        </div>
    </div>
  )
}

export default Labour