import React from 'react';
import { Search, CirclePlus, Play, Music, Users, FileText } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="left-section">
                    <div className="plus-logo">
                        <CirclePlus className={'add-button'}/>
                    </div>
                </div>

                {/*<button className="button button-icon add-button">*/}
                {/*    <Plus*/}
                {/*        size={24}*/}
                {/*        strokeLinecap={'round'}*/}
                {/*        strokeLinejoin={'round'}*/}
                {/*        strokeWidth={2.5}*/}


                {/*    />*/}
                {/*</button>*/}

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