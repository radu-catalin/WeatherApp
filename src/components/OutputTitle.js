import React, { Component } from 'react';

class OutputTitle extends Component {
    render() {
        return (
            <div className="title">
                <h1>{ this.props.location.sky }</h1>
                <h2>in { this.props.location.city }, { this.props.location.country }</h2>
            </div>
        );
    }
}

export default OutputTitle;