import React from "react";
import PropTypes from "prop-types";

export function SimpleButton(props) {
    return (
        <button onClick={props.callback} className={props.className}>
            {props.text}
        </button>)
}

SimpleButton.defualtProps = {
    disabled: false
};

SimpleButton.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
    callback: PropTypes.func,
    disabled: PropTypes.bool
}