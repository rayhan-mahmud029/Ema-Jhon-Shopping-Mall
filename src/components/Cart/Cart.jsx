import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;



    for (const product of cart){
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const taxRate = 7;  //percentage
    const totalTax = totalPrice*taxRate/100;

    
    return (
        <div className='cart-summary'>
             <h3>Order Summary</h3>
             <p>Products added: {cart.length}</p>
             <p>Total Price: {totalPrice}</p>
             <p>Total Shipping: {totalShipping}</p>
             <p>Tax: {totalTax}</p>
             <h4>Grand Total: {totalPrice + totalShipping + totalTax}</h4>
        </div>
    );
};

export default Cart;