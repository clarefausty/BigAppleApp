import React from 'react'
import Detail from '../components/details/Detail'
import  BuildingType from "../components/buildingType/BuildingType"
import Systemtype from '../components/systemType/Systemtype'
import Signage from "../components/signage/Signage"
import Material from "../components/material/Material"
import Labour from "../components/labour/Labour"
import ReviewButton from '../components/ReviewButton'


const Page1 = () => {
  return (
    <div>
        <Detail/>
        <BuildingType/>
        <Systemtype/>
        <Signage/>
        <Material/>
        <Labour/>
        <ReviewButton/>
    </div>
  )
}

export default Page1