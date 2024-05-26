import React from 'react'
import './MegaMillion.css'

function MegaMillion(){
    
    return(
        <div className='megamillion'>
            <div className='megamillion__container'>
                <img className='megamillion__image'src='https://mnlottery-craft-assets-prod.s3.us-gov-west-1.amazonaws.com/Clockwork-Images/megamillionslogo.png' alt='megamillion logo' />
                <div className='megamillion__body'>
                    <p>46</p>
                    <p>54</p>
                    <p>56</p>
                    <p>67</p>
                    <p>70</p>
                    <p>16</p>
                </div>
            </div>
        </div>
    )
}

export default MegaMillion