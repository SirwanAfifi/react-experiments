import React from 'react';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Please choose a color:</h1>
                <button onClick={this.props.click}>Change color</button>
            </div>
        );
    }
}

export default ColorPicker;