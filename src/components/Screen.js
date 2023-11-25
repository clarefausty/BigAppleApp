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
        <Form>
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