import React from 'react'
import { Link } from 'react-router-dom'

const ReviewPage = () => {
  return (
    <div>
        <h1>Review Page</h1>



        <Link to="/createestimate">
        <button type="button" className="btn btn-primary mb-5">
        Create Estimate
      </button>
      </Link>
    </div>
  )
}

export default ReviewPage