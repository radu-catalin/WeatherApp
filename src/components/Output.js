import React, { Component } from 'react';
import OutputTitle from './OutputTitle';
import WeatherState from './WeatherState';

class Output extends Component {
    
    render() {
        const { city, country, sky, humidity, temperature, wind } = this.props.data;
 
        return (
            <div className="location-content">
                <div className="container">
                    <div>
                        <OutputTitle location={{ city, country, sky }}/>
                        <div className="content">
                            <WeatherState type="Humidity" percentage={humidity}/>
                            <div className="separator"></div>
                
                            <WeatherState type="Temperature" temperature={temperature} />
                            <div className="separator"></div>
                
                            <WeatherState type="Wind" wind={wind}/>
                        </div>
                    </div>  
                </div>
            </div>     
        );
    }
}

export default Output;