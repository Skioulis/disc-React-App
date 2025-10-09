import React from 'react';
import { Search,  Play, Music, Users, FileText } from 'lucide-react';
import './Navbar.css';
import PlusButton from './buttons/PlusButton';
import NavDropdown from './dropdown/NavDropdown';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="left-section">
                    <PlusButton />
                </div>

                <div className="right-section">
                    <NavDropdown />
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