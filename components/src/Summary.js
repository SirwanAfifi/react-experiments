import React from 'react';

function createInnerElements(names) {
    let innerElems = [];
    for (let i = 0; i < names.length; i++) {
        innerElems.push(
            <div>
                {names[i]} contains {names[i].length} letters
            </div>
        )
    }
    return innerElems;
}

export function Summary(props) {
    return (
        <h4 className="bg-info text-white text-center p-2">
            {createInnerElements(props.names)}
        </h4>
    )
}