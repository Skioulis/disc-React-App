import React from 'react';
import './ListItem.css'

function ListItem() {

    const sampleLyrics = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit voluptate velit esse."
    const samplePeople =
        "Sunthetis: Fotiadis \n" +
        "Stixourgos: Tziouns"

    return (
        <div className="list-item">
            <div className="list-item-first-row">
                <div className="list-item-circle">
                    <span className="disk-id">d105</span>
                </div>
                <div className="list-item-first-row-title">
                    <span className="list-item-title">
                        to xasapiko
                    </span>
                </div>
            </div>
            <div className="list-item-second-row">
                <span className="list-item-lyrics">
                    {sampleLyrics.slice(0, 30) + "..."}
                </span>
            </div>
            <div className="list-item-third-row">
                {samplePeople}
            </div>
        </div>
    )
}
export default ListItem;