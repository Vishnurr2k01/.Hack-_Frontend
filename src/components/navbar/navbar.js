import React from 'react';
import './navbar.css'
import Signup from '../Modals/Signup/Signup';
import Login from '../Modals/Login/Login';
import logo from '../../assets/images/logo.png'

function Navbar() {
    return <div className='navbar'>
        <div className="nav__left">
            <img src={logo} alt="" />
            <p>Trivandrum</p>
        </div>
        <div className="nav__right">
            <ul>
                <li>Home</li>
                <li><Login /></li>
                <li><Signup /></li>
                <li>Contact</li>
            </ul>
        </div>

    </div>;
}

export default Navbar;
