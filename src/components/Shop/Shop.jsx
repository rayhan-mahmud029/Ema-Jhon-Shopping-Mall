import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // state for handle cart
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    },[])

    // Add to Cart Handler function
    const handleAddToCart = (product) =>{
        const newArrayOfProducts = [...cart, product];
        setCart(newArrayOfProducts);
    }

    return (
        <div className='shop-container'>
                {/* Products will be displayed here */}
            <div className="all-products">
                {
                    products.map(product => <Product 
                     key={product.id}
                     product = {product}
                     handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>

                {/* Cart summary in right side*/}
            <div className="shop-cart">
                <Cart cart={cart}></Cart>  {/*send cart object to the cart component*/}
            </div>
        </div>
    );
};

export default Shop;