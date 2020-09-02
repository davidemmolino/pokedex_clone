import React from 'react';

export default function Container(props) {
    return (
        <div className="container">
            <h1>My Pokedex Rip-Off</h1>
            <div>{props.name}</div>
        </div>
    )
}
