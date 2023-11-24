import React from 'react'
import { Container, Form } from 'react-bootstrap'


const Detail = () => {
  return (
    <div>
        <Container>
    <Form>
  <div class="mb-3 d-sm-flex mt-5 gap-3">
    <label for="estimate" class="form-label">Estimate</label>
    <input type="text" class="form-control" id="estimate" aria-describedby="emailHelp"/>
    <label for="name" class="form-label">Name of Estimator</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"/>
    <label for="tel" class="form-label">Estimator Phone</label>
    <input type="tel" class="form-control" id="tel" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 d-sm-flex mt-5 gap-3">
    <label for="" class="form-label">Password</label>
    <input type="" class="form-control" id="exampleInputPassword1"/>
    <input type="" class="form-control" id=""/>
    <input type="" class="form-control" id=""/>
    <input type="" class="form-control" id=""/>
    <input type="" class="form-control" id=""/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</Form>
</Container>
    </div>
  )
}

export default Detail