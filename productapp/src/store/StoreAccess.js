import React, { Component } from "react";
export class StoreAccess extends Component {
    render() {
        return <div className="bg-info">
            <pre className="text-white">
                {JSON.stringify(this.props.store.getState(), null, 2)}
            </pre>
        </div>
    }
}