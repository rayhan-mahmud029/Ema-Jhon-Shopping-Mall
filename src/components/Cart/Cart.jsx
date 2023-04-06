import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;




    for (const product of cart){
        totalPrice += product.price*quantity;
        totalShipping += product.shipping;
        quantity += product.quantity; //sum of each products quantity

    }
    const taxRate = 7;  //percentage
    const totalTax = totalPrice*taxRate/100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    
    return (
        <div className='cart-summary'>
             <h3>Order Summary</h3>
             <p>Products added: {quantity}</p>
             <p>Total Price: {totalPrice}</p>
             <p>Total Shipping: {totalShipping}</p>
             <p>Tax: {totalTax.toFixed(2)}</p>
             <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;