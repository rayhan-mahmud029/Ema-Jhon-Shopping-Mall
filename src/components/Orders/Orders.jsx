import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderPreview from './OrderPreview';

import './Orders.css'

const Orders = () => {

    const cart = useLoaderData();
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
                        ></OrderPreview>)
                    }
                </div>

            </div>

            <div className="orders-cart">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;