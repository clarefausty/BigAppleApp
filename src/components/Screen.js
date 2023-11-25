import React from 'react'
import { Container, Form } from "react-bootstrap";
import Detail from './details/Detail'
import Screen2 from '../pages/Screen2';

const Screen = () => {
  return (
    <div>
      <Container>
        <Form class="mb-3  mt-5">
        <Detail/>
        <Screen2/>
        </Form>
        </Container>

    </div>
  )
}

export default Screen