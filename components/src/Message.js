import React from 'react';

export function Message(props) {
    if (props.name === "Sirwan") {
        return <h1 className="bg-primary text-white text-center p-3">Hello Man, Ha ya doin?!</h1>
    }

    return (
        <h4 className="bg-success text-white text-center p-2">
            {props.greeting}, {props.name}
        </h4>
    )
}