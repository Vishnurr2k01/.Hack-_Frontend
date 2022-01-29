import React from 'react';
import trainData from '../../assets/Data/traindata';
import './trainroute.css'
import { useNavigate } from 'react-router-dom';
function TrainRoute({ setStation, station }) {
    const navigate = useNavigate()
    return <div className='trainroute'

        style={
            {
                backgroundImage: "url(/images/homebg.png)",
                height: '90vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vw'
            }}
    >

        <div className="">


        </div>
        <div className="trainroute__main">
            {trainData.map((data) => {
                return (
                    <div className="wrapper">
                        <ul onClick={() => {
                            setStation(data.StationName);
                            navigate('/order')

                        }}>

                            <li>{data.SerialNo}</li>
                            <li>{data.StationName}</li>
                            <li>{data.ScheduleArrival}</li>
                            <li>{data.ScheduleDeparture}</li>

                        </ul>
                    </div>

                )
            })}

        </div>



    </div>;
}

export default TrainRoute;
