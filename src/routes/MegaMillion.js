import React from 'react'
import './MegaMillion.css'
import Number from '../components/Number'

function MegaMillion(){
    
    return(
        <div className='megamillion'>
            <div className='megamillion__container'>
                <img className='megamillion__image'src='https://mnlottery-craft-assets-prod.s3.us-gov-west-1.amazonaws.com/Clockwork-Images/megamillionslogo.png' alt='megamillion logo' />
                <div className='megamillion__body'>
                <Number number='17'/>
                <Number number='20'/>
                <Number number='38'/>
                <Number number='46'/>
                <Number number='46'/>
                <Number number='46'/>
                    
                </div>
            </div>
        </div>
    )
}

export default MegaMillion