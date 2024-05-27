import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home(){

    const navigate = useNavigate();
    const goToMegaMillion = () => {
        navigate('/megamillion')
    }
    const goToPowerball = () => {
        navigate('/powerball')
    }
    return(
        <div className='home'>
            <div className='home__body'>
                <h1>Pick your game</h1>
                <div className='home__buttons'>
                    <button className='home__button' onClick={goToMegaMillion}>Megamillion</button>
                    <button className='home__button' onClick={goToPowerball}>Powerball</button>
                </div>
            </div>
        </div>
    )
}

export default Home