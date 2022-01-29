import React, { useEffect } from 'react';
import './navbar.css'
import Signup from '../Modals/Signup/Signup';
import Login from '../Modals/Login/Login';
import logo from '../../assets/images/logo.png'
import { useCookies } from 'react-cookie';


function Navbar({user, setUser, station}) {
    const [cookies, setCookie,removeCookie] = useCookies(['user']);

    useEffect(()=>{
        if(cookies.name && cookies.password && cookies.email && cookies._id)
        {
            setUser({
                _id     : cookies._id,
                name    : cookies.name,
                password: cookies.password,
                email   : cookies.email,
            });
        }
    },[cookies.name, cookies.password,cookies.email,cookies._id])


    function handleLogout()
    {
        console.log("Logging out");
        setUser(null);
        removeCookie('name');
        removeCookie('email');
        removeCookie('_id');
        removeCookie('password');
    }

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
                        <li onClick={handleLogout} >Logout</li>
                    </>
                    )
                }
                <li>Contact</li>
            </ul>
        </div>

    </div>;
}

export default Navbar;
