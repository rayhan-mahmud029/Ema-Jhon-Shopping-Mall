import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, clearCartHandler, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;




    for (const product of cart) {
        totalPrice += product.price * quantity;
        totalShipping += product.shipping;
        quantity += product.quantity; //sum of each products quantity

    }
    const taxRate = 7;  //percentage
    const totalTax = totalPrice * taxRate / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;


    return (
        <div className='cart-summary'>
            <h3>Order Summary</h3>
            <p>Products added: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {totalTax.toFixed(2)}</p>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
            <button className='clear-cart-btn'
                onClick={clearCartHandler}>Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;