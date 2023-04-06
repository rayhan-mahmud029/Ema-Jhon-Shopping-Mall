import React from 'react';
import './OrderPreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const OrderPreview = ({ previewItem }) => {
    const { name, price, shipping, quantity, img } = previewItem;

    return (
        <div className='preview-card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>

            <div className='preview-details'>
                <div>
                    <h4>{name}</h4>
                    <p>Price : {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                   <button> <FontAwesomeIcon icon={faTrashAlt} className='delete-btn'/> </button>
                </div>
            </div>

        </div>
    );
};

export default OrderPreview;