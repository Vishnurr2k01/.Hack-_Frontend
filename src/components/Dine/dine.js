import React, { useState } from 'react';
import './dine.css'
import DineCard from './dinecard';
import { AiOutlineSearch } from 'react-icons/ai'

function Dine() {



    return <div
        style={
            {
                backgroundImage: "url(/images/homebg.png)",
                height: '90vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100vw'
            }}
    >

        <div className="dine__header">
            <div className="dine__header__left">

                <div className="filter">
                    Dinner
                </div>
                <div className="filter__active">
                    Lunch
                </div>
                <div className="filter">
                    Breakfast
                </div>
                <div className="filter">
                    Dessert
                </div>
            </div>
            <div className="dine__header__right">
                <h2>
                    What do you have a
                    taste for?
                </h2>

                <div className="dine__search">


                    <div className="left">

                        <input type="text" placeholder='Enter a meal' className='input' />
                    </div>
                    <div className="right">
                        <button type='submit'>
                            <p><AiOutlineSearch /></p>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <h2 className='dine__title'>Lunch Restaraunts Near You</h2>

        <div className="dinecard__container">

            <DineCard />
            <DineCard />
            <DineCard />
            <DineCard />
            <DineCard />
            <DineCard />
            <DineCard />
        </div>

    </div>;
}

export default Dine;
