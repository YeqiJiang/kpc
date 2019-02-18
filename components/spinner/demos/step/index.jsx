import React from 'react';
import Spinner from 'kpc/components/spinner';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Spinner value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} max={10} min={0} step={1.2} />
                <Spinner value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} max={10} min={-10} step={0.1} />
            </div>
        )
    }
}