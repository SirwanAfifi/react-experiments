import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        backgroundColor: props.color, 
        color: '#fff', 
        fontWeight: 'bold'
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <p>{new Date().getMilliseconds()}</p>
        </div>
    );
};

export default person;