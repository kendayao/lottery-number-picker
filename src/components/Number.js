import React from 'react'
import './Number.css'

function Number(props){
   const  {number, pageLocation} = props
    console.log(pageLocation)

    return(
        <div className={`number ${pageLocation==='/megamillion'?'number__meganumber__style': ''} ${pageLocation==='/powerball'? 'number__powerball__style': ''}`}>{number}</div>
    )
}

export default Number