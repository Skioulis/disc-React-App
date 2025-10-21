import React from 'react'
import { Search } from 'lucide-react';
import NavDropdown from "../dropdown/NavDropdown.jsx";
import './SearchBar.css'

function SearchBar() {

    return (
        <form className="search-container" onSubmit={(e) => e.preventDefault()}>
            <NavDropdown/>
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
            <button type="submit" className="search-button">
                <Search size={"2rem"}/>
            </button>
        </form>
    )
}

export default SearchBar;