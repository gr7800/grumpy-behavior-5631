import React from 'react'
import { useSelector } from 'react-redux'

const Description = () => {
  const data = useSelector((state)=>state.Data.descriptionData);
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Description
