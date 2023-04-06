import React from 'react';
import './Header.css';
import logo from '../../../public/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;