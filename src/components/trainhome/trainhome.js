import React from 'react';
import './trainhome.css'
import { AiOutlineSearch } from 'react-icons/ai'
import train from '../../assets/images/train.png'
function TrainHome() {
    return <div className='trainhome'
        style={
            {
                backgroundImage: "url(/images/homebg.png)",
                height: '90vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vw'
            }}
    >

        <div className="trainhome__search">


            <div className="left">

                <input type="text" placeholder='Enter PNR Number' className='input' />
            </div>
            <div className="right">
                <button type='submit'>
                    <p><AiOutlineSearch /></p>
                </button>
            </div>
        </div>
        <div className="trainseat">
        <div className="image">
            <img src={train} alt="" />
        </div>
            <h4>Jan Shatabdi</h4>
            <form action="">
                <input type="text" placeholder='Coach' /> <br />
                <input type="text" placeholder='Seat No' /><br />
                <button id="trainseat__button" type='submit'> Submit </button>
            </form>
        </div>


    </div>;
}

export default TrainHome;
