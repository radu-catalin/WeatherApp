import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="weather-circle">
                    <div className="weather-icon">
                        <img src={`./icons/${this.props.sky}.svg`} alt="icon" />   
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;