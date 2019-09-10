import React from "react";
export function SimpleButton(props) {
    return (
        <button onClick={props.callback} className={props.className}>
            {props.text}
        </button>)
}