import React, {useState,useEffect} from 'react'
import './Powerball.css'
import Number from '../components/Number'
import { powerBallNumbersData, powerNumbersData } from '../number-data'
import {useLocation} from 'react-router-dom'

function Powerball(){
    const pageLocation = useLocation()
    console.log(pageLocation)
    const [powerBallNumbers, setPowerBallNumbers]=useState([])
    const [powerNumber, setPowerNumber]=useState('')
 
     useEffect(()=>{
         setPowerBallNumbers(pickPowerBallNumbers())
     },[])
 
     useEffect(()=>{
         setPowerNumber(pickPowerNumber())
     },[])
    
    const pickPowerBallNumbers = () => {
        const pickedNumbers = []
        for(var i = 0;i<powerBallNumbersData.length; i++){

            const number = powerBallNumbersData[Math.floor(Math.random()*powerBallNumbersData.length)]
    
            if(pickedNumbers.includes(number)){
                continue
            }else(
                pickedNumbers.push(number)
            )
            if(pickedNumbers.length===5){
                break
            }
    
        }
        const finalNumbers = pickedNumbers.sort((a, b) => a - b)
        return finalNumbers
    
    }

    const pickPowerNumber = () =>{
        const pickedPowerNumber = powerNumbersData[Math.floor(Math.random()*powerNumbersData.length)]
        return pickedPowerNumber
    }

    const getNewNumbers = ()=>{
        window.location.reload(false)
    }



   

    return(
        <div className='powerball'>
            <div className='powerball__container'>
                <img className='powerball__image'src='https://cdn.cookielaw.org/logos/9eef4793-2810-44aa-a4ff-8a6f36706655/018dd6ff-4d85-7ea7-882b-8d2b3fec445d/980719c0-945f-45a3-b501-6de3fe4e26b8/powerball-logo.jpg' alt='powerball logo' />
                <div className='powerball__body'>
                    {powerBallNumbers.map((powerBallNumber)=>
                    <Number key={powerBallNumbers.indexOf(powerBallNumber)} number={powerBallNumber}/>)}
                    <Number pageLocation={pageLocation.pathname} number={powerNumber}/>
                </div>
                <button className='generate__number__button' onClick={getNewNumbers}>Generate New Numbers</button>
            </div>
        </div>
    )
    
}

export default Powerball
