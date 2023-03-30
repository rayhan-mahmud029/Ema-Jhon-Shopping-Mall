import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, img, seller, ratings, price} = product;


    return (
        <div className='product-card'>
            <img src={img} alt="" />

            <div className="product-description">
            <h4>{name}</h4>
            <h5 style={{"margin-bottom": "20px"}} >Price: ${price}</h5>


            <p>Rating: {ratings}</p>
            <p>Manufacturer: {seller}</p>
            </div>

            <button onClick={() => handleAddToCart(product)}>
                Add to Cart 
                <FontAwesomeIcon icon={faCartFlatbed} style={{"padding-left": "5px"}}/>
                </button>

        </div>
    );
};

export default Product;