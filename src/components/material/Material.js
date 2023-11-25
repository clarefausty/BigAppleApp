import React from 'react'

const Material = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
      <h3 className='text-center'>Material</h3>
      <div className='d-flex flex-column  gap-3'>
      <h4>Pipe</h4>
      <div className="form-check form-check-inline d-flex gap-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="size1"
            name="size1"
          />
          <label className="form-check-label" htmlFor="size1">
            1/2 Size
          </label>
          <p>$0.500</p>
        </div>
        <div className="form-check form-check-inline d-flex gap-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="length"
            name="length"
          />
          <label className="form-check-label" htmlFor="size1">
            Lengths
          </label>
          <input
            type="text"
            className="form-control "
            id="size2"
            name="size2"
          />
        </div>
        <div className="form-check form-check-inline d-flex gap-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="size3"
            name="size3"
          />
          <label className="form-check-label" htmlFor="size1">
            2 1/2 Size
          </label>
          <p>$0.500</p>
        </div>
        <div className="mt-2">
          <h4>Fittings</h4>
      {/* <div className="row justify-content-center"> */}
        {/* <div className="col-md-6"> */}
          <div className="card">
            {/* <div className="card-body"> */}
              <div className="mb-3 card-body d-flex">
                <label htmlFor="numberInput" className="form-label">
                  Enter a Number:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numberInput"
                  placeholder="Enter a number"
                />
              </div>
            {/* </div> */}
          </div>
        {/* </div> */}
      {/* </div> */}
    </div>
      </div>
    </div>
  )
}

export default Material