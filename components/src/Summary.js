import React from 'react';

export function Summary(props) {
    return (
        <h4 className="bg-info text-white text-center p-2">
            {props.names.map(name => {
                return (
                    <div>
                        {name} contains {name.length} letters
                    </div>
                )
            })}
        </h4>
    )
}