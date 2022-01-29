import React, { useState } from 'react';
import './dine.css'
import DineCard from './dinecard';
import data from '../../assets/Data/data'
import { AiOutlineSearch } from 'react-icons/ai'
import Categories from './categories';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dine({ station }) {
    const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"]
    const [catName, setCatName] = useState("Breakfast")

    const [category, setCategory] = useState(categories);
    const [foodData, setFoodData] = useState(data)
    const [foodName, setFoodName] = useState()
    const navigate = useNavigate()

    const [chosenOrders, setChosenOrders] = useState([]);

    const filterItems = (categories) => {

        const newItems = data.filter((item) => item.category === categories)
        setFoodData(newItems)

    }

    function placeOrder() {
        console.log(chosenOrders);
      
    }

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
                <Categories catName={catName} setCatName={setCatName} category={category} filterItems={filterItems} />

            </div>
            <div className="dine__header__right">
                <h2>
                    What do you have a
                    taste for? {station}
                </h2>

                <div className="dine__search">


                    <div className="left">

                        <input type="text" name="food" value={foodName} onChange={(e) => setFoodName(e.target.value)} placeholder='Enter a meal' className='input' />
                    </div>
                    <div className="right">
                        <button type='submit' >
                            <p><AiOutlineSearch /></p>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <h2 className='dine__title'>Lunch Restaraunts Near You</h2>

        <Button className="mx-auto mySubmitButton" onClick={placeOrder} >

            Place Order
        </Button>
        <div className="dinecard__container">

            <DineCard catName={catName} category={category} foodData={foodData} chosenOrders={chosenOrders} setChosenOrders={setChosenOrders} placeOrder={placeOrder} />

        </div>

    </div>;
}

export default Dine;
