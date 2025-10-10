import React from 'react'
import { Search } from 'lucide-react';
import NavDropdown from "../dropdown/NavDropdown.jsx";
import './SeachBar.css'

function SearchBar() {

    return (
        <div className="search-container">
            <NavDropdown />
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
            <button className="search-button">
                <Search size={"2rem"}/>
            </button>
        </div>
    )
}

export default SearchBar;