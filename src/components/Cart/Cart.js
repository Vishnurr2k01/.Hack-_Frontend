import React from 'react';
import './Cart.css';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { useState } from 'react';
import data from '../../assets/Data/data';

export default function Cart({ seat, coach, chosenOrders, setChosenOrders }) {

  console.log(chosenOrders);
  const [value, setValue] = useState(1);
  // const cartList = [
  //   {
  //     name: "Veggie Tomato Mix",
  //     thumbnail: "/images/foodImages/food1",
  //     price: 300,
  //     quantity: 1
  //   },
  //   {
  //     name: "Tandoori Chicken",
  //     thumbnail: "/images/foodImages/food2",
  //     price: 400,
  //     quantity: 1
  //   }
  // ];
  const [cartList, setCartList] = useState([]);

  const dataToDisplay = data.filter((item)=>{
    if(chosenOrders.includes(item.id))
      return item;
  });

  console.log(dataToDisplay);

  return (
    <div className="main">
      <div className="wrapper">

        <div className="cardGroup">
          <h3 className="heading">Add to your Cart</h3>
          <Form.Group
            className="mx-auto inputBox"
            controlId="exampleForm.search"
          >
            <Form.Control
              className="inputBox mx-auto"
              radio="text"
              placeholder="Search yuMmy"
            />
          </Form.Group>
          {dataToDisplay.map((product) => {
            return (
              <div className="productCard">
                <img
                  className="thumbnail"
                  src={product.image}
                ></img>
                <div className="detailsBlock">
                  <span className="productName ml-auto text-center">
                    {product.title}
                  </span>
                  <div className="ProductInfoWrapper">
                    <span className="productPrice mr-auto">
                      INR {product.price}
                    </span>
                    <span className="productQuantity ml-auto">
                      {1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="reservation">


          {seat && coach ? (
            <div>
              <h3>
                Coach Number : {coach} <br />
                Seat Number : {seat}
              </h3>
            </div>
          ) : (
            <>
              <div> <h3>Total Seats Reserved : <span> <HiMinusSm onClick={() => setValue(value - 1)} />{value}
                <HiPlusSm onClick={() => setValue(value + 1)} /> </span>  </h3> </div>
              <input type="text" placeholder='Enter Date and Time' />
              <input type="button" id="btn" value="Submit" />
            </>
          )}

        </div>
        <div className="rightBar">
          <div key='default-radio' className="m-3">
            <Form.Check
              name='payment'
              type='radio'
              id='card'
              label='Card'
            />
            <Form.Check
              name='payment'
              type='radio'
              id='cash'
              label='Cash on Delivery'
            />
          </div>

          <Button variant=" mx-auto submitButton" type="submit">
            Proceed to Payment
          </Button>

        </div>



      </div>


    </div>

  );
}
