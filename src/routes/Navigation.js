import {React, Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import './Navigation.css'

function Navigation(){

    return(
        <Fragment>
            <div className='navigation'>
                <p className='navigation__link'>HOW TO PLAY</p>
            </div>
            <Outlet/>
         </Fragment>
    )
}

export default Navigation