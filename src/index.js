import React from 'react';

class SizeMe extends React.Component {
    state = {
        width: null,
        height: null,
    };
    componentDidMount() {
        console.log(this.root.parentNode);
        this.setState({
            width: this.root.parentNode.clientWidth,
            height: this.root.parentNode.clientHeight,
        });
    }
    renderContent() {
        const { children } = this.props;
        const { width, height } = this.state;

        if (width !== null && typeof children === 'function') {
            return children({ width, height });
        }
    }
    render() {
        return <span ref={i => (this.root = i)}>{this.renderContent()}</span>;
    }
}

export default SizeMe;
