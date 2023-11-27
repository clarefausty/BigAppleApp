import React from 'react'
import { Link } from 'react-router-dom'

const CreateEstimatePage = () => {
  return (
    <div>
        <h1>Create Estimate</h1>


        <Link to="/submitestimate">
        <button type="button" className="btn btn-primary mb-5">
        Submit Estimate
      </button>
      </Link>
    </div>
  )
}

export default CreateEstimatePage