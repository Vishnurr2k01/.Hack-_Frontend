import React from 'react';
import './Cart.css';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Cart() {

    const cartList = [
        {
            name: "Veggie Tomato Mix",
            thumbnail:"/images/foodImages/food1",
            price: 300,
            quantity:1
        },
        {
            name: "Tandoori Chicken",
            thumbnail:"/images/foodImages/food2",
            price: 400,
            quantity:1
        }
    ];


    return (
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
          {cartList.map((product) => {
            return (
              <div className="productCard">
                <img
                  className="thumbnail"
                  src="https://picsum.photos/200"
                ></img>
                <div className="detailsBlock">
                  <span className="productName ml-auto text-center">
                    {product.name}
                  </span>
                  <div className="ProductInfoWrapper">
                    <span className="productPrice mr-auto">
                      INR {product.price}
                    </span>
                    <span className="productQuantity ml-auto">
                      {product.quantity}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
    );
}
