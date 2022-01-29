import React from 'react';
import './navbar.css'
function Navbar() {
    return <div className='navbar'>
        <div className="nav__left">
            <p>Trivandrum</p>
        </div>
        <div className="nav__right">
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>SignUp</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>;
}

export default Navbar;
