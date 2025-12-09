import React from 'react'
import './Howtoplay.css'

function Howtoplay(){
    return(
        <div className='howtoplay'>
            <div className='howtoplay__container'>
                <h1>How to Play</h1>
                <p>Lottery Number picker app generates a combination of numbers that are the top 20 most common numbers and top 10 power/mega number in each megamillion and poweball game </p>
                <h3>MegaMillion</h3>
                <p>For the megamillion game, the lottery number picker app will select five numbers and one mega number. The mega number will be the yellow ball. </p>
                <div className='howtoplay__image'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='howtoplay__mega'></div>
                </div>
                <h3>Powerball</h3>
                <p>For the powerball game, the lottery number picker app will select five numbers and one power number. The power number will be the red ball.lsw</p>
                <div className='howtoplay__image'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='howtoplay__power'></div>
                </div>
            </div>
        </div>
    )
}

export default Howtoplay