import React from 'react'
import './Number.css'

function Number(props){
   const  {number} = props
    return(
        <div className='number'>{number}</div>
    )
}

export default Number