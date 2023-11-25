import React from 'react'

const Labour = () => {
  return (
    <div>
      <h4>Labour</h4>
      <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center">
                <label htmlFor="notees" className="form-label w-100">
                  # of Tees
                </label>
                <input
                  type="number"
                  className="form-control  py-2"
                  id="notees"
                  placeholder="5"
                />
              </div>
              <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center">
                <label htmlFor="notees" className="form-label w-100">
                  # of Tees
                </label>
                <input
                  type="number"
                  className="form-control  py-2"
                  id="notees"
                  placeholder="5"
                />
              </div>
    </div>
  )
}

export default Labour