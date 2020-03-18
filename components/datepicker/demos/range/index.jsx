import React from 'react';
import Datepicker from 'kpc-react/components/datepicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Datepicker range value={this.state.date} on$change-value={(c, date) => this.setState({date})} clearable />
                You selected: {JSON.stringify(this.state.date)}
                <br /><br />
                <Datepicker range type="datetime" value={this.state.time} on$change-value={(c, time) => this.setState({time})} clearable />
                You selected: {JSON.stringify(this.state.time)}
            </div>
        )
    }
}