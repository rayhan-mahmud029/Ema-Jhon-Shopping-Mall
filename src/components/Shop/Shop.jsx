import React, { useEffect, useState } from 'react';
import { addToCart, deleteCart, getStoredData } from '../../../utilities/localDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);


    // state for handle cart
    const [cart, setCart] = useState([]);

    // clear cart handler
    const clearCartHandler = () => {
        setCart([]);
        deleteCart();
    }


    useEffect(() => {
        fetch('products.json')
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, [])

    // side effect to get stored data
    useEffect(() => {
        const storedCartData = getStoredData();
        let saveCart = [];
        let quantity;


        for (const id in storedCartData) {
            console.log(id);
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const productQuantity = storedCartData[id];
                addedProduct.quantity = productQuantity;
                // add the addedProducts in saveCart
                saveCart.push(addedProduct)
            }
        }

        console.log(saveCart);
        // set the cart
        setCart(saveCart)
    }, [products])

    // Add to Cart Handler function
    const handleAddToCart = (product) => {
        let newArrayOfProducts;
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1
            newArrayOfProducts = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remainingProds = cart.filter(pd => pd.id != product.id);
            newArrayOfProducts = [...remainingProds, exists]
        }
        setCart(newArrayOfProducts);
        addToCart(product.id)
    }

    return (
        <div className='shop-container'>
            {/* Products will be displayed here */}
            <div className="all-products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            {/* Cart summary in right side*/}
            <div className="shop-cart">
                <Cart
                    cart={cart}
                    clearCartHandler={clearCartHandler}
                >
                    <button className='child-btn'>
                        <Link to='/orders' className='child-btn-link'>Review Order</Link>
                        <FontAwesomeIcon icon={faArrowRight} />

                    </button>
                </Cart>  {/*send cart object to the cart component*/}
            </div>
        </div>
    );
};

export default Shop;