import React from 'react'
import { Container, Form } from "react-bootstrap";
import Detail from './details/Detail'
import BuildingType from './buildingType/BuildingType'
import Systemtype from './systemType/Systemtype'
import Signage from './signage/Signage'

const Screen = () => {
  return (
    <div>
      <Container>
        <Form class="mb-3  mt-5">
        <Detail/>
        <BuildingType/>
        <Systemtype/>
        <Signage/>
        </Form>
        </Container>

    </div>
  )
}

export default Screen