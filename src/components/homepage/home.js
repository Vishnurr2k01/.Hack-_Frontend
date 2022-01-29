import React, { useState } from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
    return <div className='home' style={
        {
            backgroundImage: "url(/images/homebg.png)",
            height: '90vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100vw'
        }
    }>
        <div className="home__content">
            <div className="home__text1">
                <h2> Why stay hungry when <br />
                    you have yuMmy</h2>
            </div>
            <div className="home__button">
                <div className="home__button1" onClick={() => { navigate('/fortrain') }}>
                    For Train
                </div>
                <div className="home__button1" onClick={() => { navigate('/order') }}>
                    For Dine
                </div>

            </div>

            <div className="home__text2">
                <h2> Why waste Your Time <br />
                    Waiting For Food</h2>
            </div>
        </div>

    </div>;
}

export default Home;
