import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import OrderPreview from './OrderPreview';

import './Orders.css'
import { deleteCart, deleteStoredDataById } from '../../../utilities/localDB';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orders = () => {

    // Load Saved Cart from local storage
    const savedCart = useLoaderData();

    // state that can be change by deleting order preview items
    const [cart, setCart] = useState(savedCart);

    // delete  button onClick handler
    const handleDeleteOrderItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        deleteStoredDataById(id)
    }

    // clear cart handler
    const clearCartHandler = () => {
        setCart([]);
        deleteCart();
    }


    let items = 0;
    cart.map(product => items += product.quantity)


    return (
        <div className='orders-container'>
            <div className="all-orders">
                <div>
                    <h3>Products: {items}</h3>
                    {
                        cart.map(product => <OrderPreview
                            key={product.id}
                            previewItem={product}
                            handleDeleteOrderItem={handleDeleteOrderItem}
                        ></OrderPreview>)
                    }
                </div>

            </div>

            <div className="orders-cart">
                <Cart
                    cart={cart}
                    clearCartHandler={clearCartHandler}>
                    <button className='child-btn'>
                        <Link to='/checkout' className='child-btn-link'>Proceed Checkout</Link>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </button>

                </Cart>
            </div>

        </div>
    );
};

export default Orders;