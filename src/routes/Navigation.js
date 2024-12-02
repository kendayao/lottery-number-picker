import {React, Fragment} from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import './Navigation.css'

function Navigation(){

    const pageLocation = useLocation()

    return(
        <Fragment>
            <div className='navigation'>
            <FontAwesomeIcon icon="fa-regular fa-arrow-left-long" />
                {pageLocation.pathname === '/'? 
                <Link className='navigation__link' to='howtoplay'>HOW TO PLAY</Link>:
                <Link className='navigation__link' to='/'>RETURN TO HOME</Link>}
            </div>
            <Outlet/>
         </Fragment>
    )
}

export default Navigation