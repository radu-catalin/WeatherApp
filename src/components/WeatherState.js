import React, { Component } from 'react';

class WeatherState extends Component {
    
    render() {
        
        let str;
        if(this.props.percentage !== undefined)
            str = this.props.percentage + '%';
        else if(this.props.temperature !== undefined)
            str = this.props.temperature + String.fromCharCode(176); // !!!!
        else if(this.props.wind !== undefined)
            str = this.props.wind +' mph';
        
        return (
            <div className="weather-state">
                <h2>{ this.props.type }</h2>
                <span>{ str }</span>
            </div>
        );
    }
}

export default WeatherState;