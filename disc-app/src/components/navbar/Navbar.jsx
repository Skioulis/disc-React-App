import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <button className="add-button">
                    <span className="plus-sign">+</span>
                </button>

                <div className="right-section">
                    <select className="dropdown">
                        <option>All</option>
                        <option>Songs</option>
                        <option>Artists</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                    <button className="search-button">🔍</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;