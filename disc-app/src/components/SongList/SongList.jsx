import "./SongList.css"
import React from "react";
import Card from "../card/Card.jsx";

import SampleSongs from "../../../SampleData/SampleSongs.js";

export default function SongList() {

    return (
        <>
            <ul>
            {SampleSongs.map((song) => (
                <li>
                    <Card key={song.id} song={song}/>
                </li>))}
            </ul>
        </>
    )
}

