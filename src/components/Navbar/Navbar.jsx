import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets.js';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();

    const handleClick = (url) => {
        setMenu(url);
        navigate(url === "home" ? "/" : `/${url}`);
    };

    return (
        <div className="navbar">
            {/* Logo */}
            <img 
                src={assets.logo} 
                alt="Logo" 
                className="logo" 
                onClick={() => handleClick("home")}
                style={{ cursor: 'pointer' }} 
            />

            {/* Menu */}
            <ul className="navbar-menu">
                <li 
                    onClick={() => handleClick("home")} 
                    className={menu === "home" ? "active" : ""}
                >
                    Home
                </li>
                <li 
                    onClick={() => handleClick("Top-sellers")} 
                    className={menu === "Top-sellers" ? "active" : ""}
                >
                    Top Sellers
                </li>
                <li 
                    onClick={() => handleClick("mobile-app")} 
                    className={menu === "mobile-app" ? "active" : ""}
                >
                    Mobile App
                </li>
                <li 
                    onClick={() => handleClick("contact-us")} 
                    className={menu === "contact-us" ? "active" : ""}
                >
                    Contact Us
                </li>
            </ul>

            {/* Right Section */}
            <div className="navbar-right">
                {/* Search Icon */}
                <img 
                    src={assets.search_icon} 
                    alt="Search" 
                    onClick={() => navigate('/search')} 
                    style={{ cursor: 'pointer' }} 
                />

                {/* Basket Icon */}
                <div className="navbar-search-icon">
                    <img
                        src={assets.basket_icon} 
                        alt="Basket" 
                        onClick={() => navigate('/cart')} 
                        style={{ cursor: 'pointer' }} 
                    />
                    <div className="dot"></div> {/* Notification dot */}
                </div>
                <button
                    onClick={() => navigate('/signin')} 
                    style={{ cursor: 'pointer' }}
                >
                    SIGN IN
                </button>
            </div>
        </div>
    );
}

export default Navbar;
