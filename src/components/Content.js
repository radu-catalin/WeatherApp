import React, { Component } from 'react';
import Header from './Header';
import Output from './Output';

import { connect } from 'react-redux';

class Content extends Component {
    
    render() {
        const { data } = this.props;
        
        return (
            <div className="appContainer">
                {(data.country !== undefined) 
                ? <React.Fragment>
                    <Header sky={data.sky} />
                    <Output data={data} />
                </React.Fragment>
                : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.posts.currentData,
        firstLaunch: state.posts.firstLaunch
    }
}

export default connect(mapStateToProps)(Content);