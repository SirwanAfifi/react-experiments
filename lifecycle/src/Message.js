import React, { Component } from 'react';
import { ActionButton } from './ActionButton';

export class Message extends Component {
    render() {
        return <div>
            <ActionButton theme="primary" {...this.props} />
            <div className="h5 text-center p-2">
                {this.props.message}
            </div>
        </div>
    }
}