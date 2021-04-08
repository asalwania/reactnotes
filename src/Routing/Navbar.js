import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li> <NavLink exact activeClassName="active_class" to="/"> Home</NavLink></li>
                <li> <NavLink exact activeClassName="active_class" to="/contact"> Contact us</NavLink></li>
                <li> <NavLink exact activeClassName="active_class" to="/about"> About us</NavLink></li>
                <li> <NavLink exact activeClassName="active_class" to="/services"> Services</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
