import React, { Component } from "react";
export class StoreAccess extends Component {
    constructor(props) {
        super(props);
        this.selectors = {
            product: (storeState) => storeState.modelData.products[0],
            state: (storeState) => storeState.stateData
        }
    }
    render() {
        return <div className="bg-info">
            <pre className="text-white">
                {JSON.stringify(this.props.store.getState(), null, 2)}
            </pre>
        </div>
    }

    selectData() {
        let storeState = this.props.store.getState();
        return Object.entries(this.selectors).map(([k, v]) => [k, v(storeState)])
            .reduce((result, [k, v]) => ({ ...result, [k]: v }), {});
    }
}