import React from 'react';
import './ListItem.css'

function ListItem() {
    return (
        <div className="list-item">
            <div className="list-item-first-row">
                <div className="list-item-circle">
                    <span>d105</span>
                </div>
                <div className="list-item-first-row-title">
                    <span>
                        to xasapiko
                    </span>
                </div>
            </div>
            <div className="list-item-second-row">
                test
            </div>
            <div className="list-item-third-row">
                test
            </div>
        </div>
    )
}
export default ListItem;