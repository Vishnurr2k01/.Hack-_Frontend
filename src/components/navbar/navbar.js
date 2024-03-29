import React, { useEffect } from 'react';
import './navbar.css'
import Signup from '../Modals/Signup/Signup';
import Login from '../Modals/Login/Login';
import logo from '../../assets/images/logo.png'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar({user, setUser, station}) {
    const [cookies, setCookie,removeCookie] = useCookies(['user']);
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies.name && cookies.password && cookies.email && cookies._id && !user)
        {
            axios.post("https://yummy-api.herokuapp.com/login", {name:cookies.name,password:cookies.password}).then(
                res => {
                    // alert(res.data)
                    console.log(res.data);
                    if(res.status == 200 && res.data.status==='ok')
                    {
                        console.log("Cookie Logged in");
                        setUser(res.data.user);
                    }
                    else
                    {
                        console.log("Cookie Invalid");
                        setUser(null);
                        removeCookie('name');
                        removeCookie('email');
                        removeCookie('_id');
                        removeCookie('password');
                    }
                }
            ).catch(e=>{console.log(e)});
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
                <li onClick={()=>{navigate('/')}} className="hoverable">Home</li>
                {!user &&
                    (<>
                        <li className="hoverable" ><Login user={user} setUser={setUser} /></li>
                        <li className="hoverable" ><Signup user={user} setUser={setUser} /></li>
                    </>)
                }
                {
                    user &&
                    (<> <li>Welcome {user.name}</li>
                        <li className="hoverable" onClick={handleLogout} >Logout</li>
                    </>
                    )
                }
                <li>Contact</li>
            </ul>
        </div>

    </div>;
}

export default Navbar;
