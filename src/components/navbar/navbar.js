import React from 'react';
import './navbar.css'
import Signup from '../Modals/Signup/Signup';
import Login from '../Modals/Login/Login';
import logo from '../../assets/images/logo.png'



function Navbar({user, setUser, station}) {


    return <div className='navbar'>
        <div className="nav__left">
            <img src={logo} alt="" />
            <p> {station ? `${station}` : "Location"} </p>
        </div>
        <div className="nav__right">
            <ul>
                <li>Home</li>
                {!user &&
                    (<>
                        <li><Login user={user} setUser={setUser} /></li>
                        <li><Signup user={user} setUser={setUser} /></li>
                    </>)
                }
                {
                    user &&
                    (<> <li>Welcome {user.name}</li>
                        <li>Logout</li>
                    </>
                    )
                }
                <li>Contact</li>
            </ul>
        </div>

    </div>;
}

export default Navbar;
