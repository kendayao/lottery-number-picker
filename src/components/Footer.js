import React from 'react'
import './Footer.css'

function Footer(){

    var date = new Date();
    var year=date.getFullYear();

    return(
        <div className='footer'>
            <p>&#169;{year}, Lottery Number Picker</p>
        </div>
    )
}

export default Footer