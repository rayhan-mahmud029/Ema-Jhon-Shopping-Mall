import React from 'react';
import './Header.css';
import logo from '../../../public/Logo.svg';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className="nav-items">
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;