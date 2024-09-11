import React, {useState,useEffect} from 'react'
import './MegaMillion.css'
import Number from '../components/Number'
import {megaMillionNumbersData, megaNumbersData} from '../number-data'
import {useLocation} from 'react-router-dom'


function MegaMillion(){

    const pageLocation = useLocation()
    console.log(pageLocation)

   const [megaMillionNumbers, setMegaMillionNumbers]=useState([])
   const [megaNumber, setMegaNumber]=useState('')

    useEffect(()=>{
        setMegaMillionNumbers(pickMegaMillionNumbers())
    },[])

    useEffect(()=>{
        setMegaNumber(pickMegaNumber())
    },[])
   

    const pickMegaMillionNumbers = () => {
        const pickedNumbers = []
        for(var i = 0;i<megaMillionNumbersData.length; i++){

            const number = megaMillionNumbersData[Math.floor(Math.random()*megaMillionNumbersData.length)]
    
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

    const pickMegaNumber = () =>{
        const pickedMegaNumber = megaNumbersData[Math.floor(Math.random()*megaNumbersData.length)]
        return pickedMegaNumber
    }

    const getNewNumbers = ()=>{
        window.location.reload(false)
    }


    return(
        <div className='megamillion'>
            <div className='megamillion__container'>
                <img className='megamillion__image'src='https://mnlottery-craft-assets-prod.s3.us-gov-west-1.amazonaws.com/Clockwork-Images/megamillionslogo.png' alt='megamillion logo' />
                <div className='megamillion__body'>
                    {megaMillionNumbers.map((megaMillionNumber)=>
                    <Number key={megaMillionNumbers.indexOf(megaMillionNumber)} number={megaMillionNumber}/>)}
                    <Number pageLocation={pageLocation.pathname} number={megaNumber}/>
                </div>
                <button className='generate__number__button' onClick={getNewNumbers}>Generate New Numbers</button>
            </div>
        </div>
    )
}

//test

export default MegaMillion