import "./SongList.css"
import React from "react";
import Card from "../card/Card.jsx";

import SampleSongs from "../../../SampleData/SampleSongs.js";

export default function SongList() {

    return (
        <>
            {SampleSongs.map((song) => (<Card/>))}
        </>
    )
}

