import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
const Detail = () => {
  const [isViolation, setIsViolation] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsViolation(event.target.id === "yes");
  };
  return (
    
    <Container>
    <Form class="mb-3  mt-5">
      <div class="mb-3 d-sm-flex mt-5 gap-3">
        <label for="estimate" class="form-label w-100">
          Estimate
        </label>
        <input
          type="text"
          class="form-control"
          id="estimate"
          aria-describedby="emailHelp"
        />
        <label for="name" class="form-label w-100">
          Name of Estimator
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
        <label for="tel" class="form-label w-100">
          Estimator Phone
        </label>
        <input
          type="tel"
          class="form-control"
          id="tel"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3 d-sm-flex  gap-3 ">
        <label for="" class="form-label w-100">
          Building Address
        </label>
        <input
          type="text"
          class="form-control mb-2"
          id=""
          placeholder="Street"
        />
        <input type="text" class="form-control mb-2" id="" placeholder="City" />
        <input type="text" class="form-control" id="" placeholder="NY" />
        <input
          type="text"
          class="form-control mb-2"
          id=""
          placeholder="Zipcode"
        />
      </div>
      <div class="mb-3 d-sm-flex  gap-3">
        <label for="estimate" class="form-label w-100">
          Req By
        </label>
        <input
          type="text"
          class="form-control"
          id="estimate"
          aria-describedby="emailHelp"
        />
        <label for="name" class="form-label w-100">
          Management or Owner of Building
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
        <label for="tel" class="form-label w-100">
          Find Test Date
        </label>
        <input
          type="date"
          class="form-control"
          id="tel"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3 d-sm-flex gap-2 ">
        <div className="mb-3 ">
          <h3 className="w-100" style={{ fontSize: "18px" }}>
            Is this a violation
          </h3>
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
        <div className="mb-3 d-sm-flex ">
          <label for="estimate" class="form-label">
            violation due date
          </label>
          <input
            type="date"
            class="form-control"
            id="estimate"
            aria-describedby="emailHelp"
          />
          <label for="estimate" class="form-label">
            date of estimate
          </label>
          <input
            type="date"
            class="form-control"
            id="estimate"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      </Form>
      </Container>
    
  );
};

export default Detail;
