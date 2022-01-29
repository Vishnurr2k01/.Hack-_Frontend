import React from 'react';
import './trainhome.css'
import { AiOutlineSearch } from 'react-icons/ai'
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


    </div>;
}

export default TrainHome;
