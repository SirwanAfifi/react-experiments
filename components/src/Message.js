import React from 'react';

export function Message(props) {
    if (props.name === "Sirwan") {
        return <h1 className="bg-warning text-white text-center p-3">Hello Man, Ha ya doin?!</h1>
    } else if (props.name === "Behzad") {
        return <h1 className="bg-danger text-white text-center p-3">This is the guy!</h1>

    }
    return (
        <h4 className="bg-success text-white text-center p-2">
            {props.greeting}, {props.name}
        </h4>
    )
}