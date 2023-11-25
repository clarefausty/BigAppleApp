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
      
      {/* ELBOWS CARD */}
          <div className="card mb-3">
            {/* <div className="card-body"> */}
              <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center border-bottom">
                <label htmlFor="elbowsamount" className="form-label">
                  Elbows
                </label>
                <input
                  type="number"
                  className="form-control border-0 py-2"
                  id="elbowsamount"
                  placeholder="$03.00"
                />
              </div>
            {/* </div> */}
            <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center">
                <label htmlFor="numberInput" className="form-label w-100">
                  # of Elbows
                </label>
                <input
                  type="number"
                  className="form-control  py-2"
                  id="noofelbows"
                  placeholder="5"
                />
              </div>
          </div>
        
         {/* TEES CARD */}

        <div className="card">
            {/* <div className="card-body"> */}
              <div className="mb-3 card-body d-flex gap-5 justify-content-center align-items-center border-bottom">
                <label htmlFor="teesamount" className="form-label">
                  Tees
                </label>
                <input
                  type="number"
                  className="form-control border-0 py-2"
                  id="teesamount"
                  placeholder="$03.00"
                />
              </div>
            {/* </div> */}
           
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
      {/* </div> */}
    </div>
      </div>
    </div>
  )
}

export default Material