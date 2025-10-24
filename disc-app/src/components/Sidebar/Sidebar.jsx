import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/library">Library</a></li>
                    <li><a href="/playlists">Playlists</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;