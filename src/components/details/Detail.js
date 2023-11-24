
import React, { useState } from 'react';
import { Container, Form } from "react-bootstrap";

const Detail = () => {

  const [isViolation, setIsViolation] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsViolation(event.target.id === 'yes');
  };
  return (
    <div>
      <Container>
        <Form>
          <div class="mb-3 d-sm-flex mt-5 gap-3">
            <label for="estimate" class="form-label">
              Estimate
            </label>
            <input
              type="text"
              class="form-control"
              id="estimate"
              aria-describedby="emailHelp"
            />
            <label for="name" class="form-label">
              Name of Estimator
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
            <label for="tel" class="form-label">
              Estimator Phone
            </label>
            <input
              type="tel"
              class="form-control"
              id="tel"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 d-sm-flex mt-5 gap-3 gx-3">
            <label for="" class="form-label">
              Building Address
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Street"
            />
            <input
              type="text"
              class="form-control my-3"
              id=""
              placeholder="City"
            />
            <input type="text" class="form-control" id="" placeholder="NY" />
            <input
              type="text"
              class="form-control my-3"
              id=""
              placeholder="Zipcode"
            />
          </div>
          <div class="mb-3 d-sm-flex mt-5 gap-3">
            <label for="estimate" class="form-label">
              Req By
            </label>
            <input
              type="text"
              class="form-control"
              id="estimate"
              aria-describedby="emailHelp"
            />
            <label for="name" class="form-label">
              Management or Owner of Building
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
            <label for="tel" class="form-label">
              Find Test Date
            </label>
            <input
              type="date"
              class="form-control"
              id="tel"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
      <h3>Is this a violation</h3>
      <div className="form-check form-check-inline">
        <input
          type="checkbox"
          className="form-check-input"
          id="yes"
          name="yes"
          checked={isViolation}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="yes">
          Yes
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          type="checkbox"
          className="form-check-input"
          id="no"
          name="no"
          checked={!isViolation}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="no">
          No
        </label>
      </div>
    </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Detail;
