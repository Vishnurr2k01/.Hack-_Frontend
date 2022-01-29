import React from 'react';
import './dinecard.css'
import img from '../../assets/images/img.png'
import data from '../../assets/Data/data'

function DineCard({ category, foodData, catName ,chosenOrders, setChosenOrders}) {

    const items = foodData.filter((food) => food.category === catName)

    function handleChoose(id)
    {
        if(!chosenOrders.includes(id))
        {
            console.log(`Does not include ${id} already, adding`);
            console.log(id);
            setChosenOrders(
                [
                    ...chosenOrders,
                    id
                ]
            )
        }
        else
        {
            console.log(`Already Includes ${id}`);
        }
    }

    return (

        <>
            {items.map((datas) => {
                return (
                    <div className='dinecard'>

                        <div className="dinecard__image">
                            <img src={datas.image} className='image' alt="" />
                        </div>
                        <div className="dinecard__desc">
                            <h4> {datas.title} </h4>
                            <h6> <em> {datas.hotel} </em></h6>
                            <p>{catName} | {datas.Location} | Rs.{datas.price}</p>
                            <div className="card__bottom">

                                <p><span>{datas.rating}%</span></p>
                                <p id='add' onClick={()=>{handleChoose(datas.id)}}>
                                    {chosenOrders.includes(datas.id)?"Added":"Add to cart"}
                                </p>
                            </div>

                        </div>

                    </div>
                )
            })}




        </>
    )
}

export default DineCard;
