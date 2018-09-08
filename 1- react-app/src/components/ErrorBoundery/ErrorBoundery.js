import React from 'react';

class ErrorBoundery extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    };

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundery;