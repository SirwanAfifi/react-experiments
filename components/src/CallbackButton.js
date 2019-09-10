import React from 'react';

export function CallbackButton(props) {
    return (
        <button className={`btn btn-${props.theme} btn-sm m-1`}
            onClick={props.callback}>
            {props.text}
        </button>
    );
}