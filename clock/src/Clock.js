import React, { Component } from 'react';
import { AnalogDisplay } from './AnalogDisplay';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: (new Date()).toString()
        }
    }
    launchClock() {
        setInterval(() => {
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toString()
            })
        }, 1000)
    }
    render() {
        return (
            <AnalogDisplay time={this.state.currentTime} />
        );
    }
}