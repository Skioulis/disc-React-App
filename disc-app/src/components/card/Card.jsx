import React from 'react';
import './Card.css'
import Song from "../../models/Song";

function Card({song}) {
    /**
     * @param {{ song: Song }} props
     */


    const sampleLyrics = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit voluptate velit esse."
    const samplePeople =
        "Sunthetis: Fotiadis \n" +
        "Stixourgos: Tziouns"

    if (!song) return null;
    const hasDisks = Array.isArray(song.disks) && song.disks.length > 0;
    const firstDisk = hasDisks ? (typeof song.disks[0] === 'object' ? song.disks[0].id ?? '' : song.disks[0]) : null;
    return (
        <div className="list-item">
            <div className="list-item-first-row">

                {hasDisks && (
                    <div className="list-item-circle">
                        <span className="disk-id">{firstDisk}</span>
                    </div>
                )}
                <div className="list-item-first-row-title">
                    <span className="list-item-title">
                        {song.title}
                    </span>
                </div>
            </div>
            <div className="list-item-second-row">
                <span className="list-item-lyrics">
                    {song.lyrics}
                </span>
            </div>
            <div className="list-item-third-row">
                {samplePeople}
            </div>
        </div>
    )
}
export default Card;