import React from 'react'
import './Number.css'

function Number(props){
   const  {number, pageLocation} = props
    console.log(pageLocation)
//    const test1 = pageLocation==='/megamillion'? 'megaNumber__stye': ''
//    const test2 = pageLocation==='/powerball'? 'powerBall__stye': ''
//    const number1='number'
    return(
        <div className={`number ${pageLocation==='/megamillion'?'number__meganumber__style': ''} ${pageLocation==='/powerball'? 'number__powerball__style': ''}`}>{number}</div>
    )
}

export default Number