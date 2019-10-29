import React from 'react';

export const AnalogDisplay = (props) => {
    let date = new Date(props.time);
    console.log(date)
    let dialStyle = {
        position: 'relative',
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: '#09d3ac'
    };
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid none',
        width: '40%',
        height: 2,
        transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'white'
    };
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid none',
        width: '40%',
        height: 2,
        transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: '#e6e6ba'
    }
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid none',
        width: '25%',
        height: 2,
        transform: 'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: '#e8b8b0'
    }

    return (
        <div style={dialStyle}>
            <div style={secondHandStyle} />
            <div style={minuteHandStyle} />
            <div style={hourHandStyle} />
        </div>
    );
};