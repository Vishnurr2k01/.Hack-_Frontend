import React from 'react';
import './dinecard.css'
import img from '../../assets/images/img.png'

function DineCard() {
    return <div className='dinecard'>

        <div className="dinecard__image">
            <img src={img} className='image' alt="" />
        </div>
        <div className="dinecard__desc">
            <h3>Thaal Kitchen</h3>
            <p>Lunch | Kerala | Rs.100</p>
            <p><span>97%</span></p>
        </div>

    </div>;
}

export default DineCard;
