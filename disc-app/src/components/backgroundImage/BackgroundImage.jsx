import React from 'react'
import './BackgroundImage.css'

export default function BackgroundImage(props) {
    /**
     * @param {string} img_URL
     * @type {string}
     */

    const bg = new URL(props.imgURL, import.meta.url).href


    return (
        <div className="viewport">
        <div
    className="image-wrap"
    style={{ ['--bg-image']: `url("${bg}")` }}
>
    {/* If you ever need an <img>, uncomment and use the same bg:
            <img src={bg} alt="Background" />
        */}
</div>
</div>
    )
}