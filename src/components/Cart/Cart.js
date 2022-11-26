import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props;
    let total = 0;
    let quantity=0;
    let shipping = 0;
    for (const product of cart){
        //console.log(product);
        quantity=quantity+product.quantity;
        total=total+product.price*product.quantity;
        shipping =shipping+product.shipping;
       
    }

    const tax=parseFloat((total * 0.1).toFixed(2))
    const grandTotal= total+shipping+tax;

    return (
        <div className='cart'>
            <h4>This is for order summery</h4>
            <h3>Selected item : {quantity}</h3>
            <p>Total price : ${total}</p>
            <p>Shipping : ${shipping}</p>
            <p>Tax :{tax} </p>
            <h5>Grand Total  : ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;