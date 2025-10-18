import React from 'react';
// import { Search, Play, Music, Users, FileText } from 'lucide-react';
import './Navbar.css';
import PlusButton from './buttons/PlusButton';
import SearchBar from "./search-section/SearchBar.jsx";
import '../../assets/styles/utilities.css'


function Navbar(){
    return (
        <header className="box-container">
            <nav className="navbar styled-box">
                <div className="left-section">
                    <PlusButton />
                </div>

                <div className="right-section">
                    <SearchBar />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;