import React from 'react'
import BuildingType from '../components/buildingType/BuildingType'
import Systemtype from '../components/systemType/Systemtype'
import Signage from '../components/signage/Signage'
import Material from '../components/material/Material'
import Labour from '../components/labour/Labour'

const Screen2 = () => {
  return (
    <div>
        <BuildingType/>
        <Systemtype/>
        <Signage/>
        <Material/>
        <Labour/>
    </div>
  )
}

export default Screen2