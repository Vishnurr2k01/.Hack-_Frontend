import React, { useState } from 'react';
import './trainhome.css'
import { AiOutlineSearch } from 'react-icons/ai'
import train from '../../assets/images/train.png'
import trainData from '../../assets/Data/traindata'
import { useNavigate } from 'react-router-dom';
function TrainHome({ seat,coach ,setSeat, setCoach }) {
    const navigate = useNavigate()

    const [number, setNumber] = useState()
    // const [pnr,setpnr] = useState() 
    const submitHandler = () => {

        if (number > 12000 && coach && seat) {
            navigate('/trainroute')
        } else if (number < 12000) {
            alert("Enter a valid Pnr Number")
        } else {
            alert("All fields are required")
        }

    }



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

                <input type="text" placeholder='Enter PNR Number' value={number} name="number" onChange={(e) => setNumber(e.target.value)} className='input' />
            </div>
            <div className="right">
                <button type='submit' onClick={submitHandler}>
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
                <input type="text" name="coach" value={coach} required onChange={(e) => setCoach(e.target.value)} placeholder='Coach' /> <br />
                <input type="text" name='seatNumber' required value={seat} onChange={(e) => setSeat(e.target.value)} placeholder='Seat No' /><br />
                <button id="trainseat__button" type='submit' onClick={submitHandler}> Submit </button>
            </form>
        </div>


    </div>;
}

export default TrainHome;
