import "./SongList.css"
import React from "react";
import Card from "../card/Card.jsx";

import SampleSongs from "../../../SampleData/SampleSongs.js";

export default function SongList() {

    return (
        <>
            <div className="list-title">
                <h2>
                    Τραγούδια
                </h2>
            </div>
            <div className="list-scroll" >
            <ul className="list-container">
            {SampleSongs.map((song) => (
                <li>
                    <Card key={song.id} song={song}/>
                </li>))}
            </ul>
            </div>
        </>
    )
}

