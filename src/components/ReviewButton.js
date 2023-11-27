import React from 'react'
import { Link } from 'react-router-dom'

const ReviewButton = () => {
  return (

    <div>
        <Link to="/review">
        <button type="button" className="btn btn-primary mb-5">
        Save and Review
      </button>
      </Link>
    </div>
  )
}

export default ReviewButton