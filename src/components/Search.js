import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Search extends Component {
    state = {
        country: '',
        city: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { country, city } = this.state;

        if(country !== '' && city !== '') {
            this.props.createPost({ country, city });
            this.setState({country: '', city: ''});
        }
    }


    render() {
        return (
            <React.Fragment>
                <form className="search-form" onSubmit={this.onSubmit}>
                    <input id="country" type="text" placeholder="country" onChange={this.onChange} value={this.state.country} />
                    <input id="city" type="text" placeholder="city" onChange={this.onChange} value={this.state.city} />
                    <input type="submit" value="Get Weather"/>
                </form>
                { this.props.error 
                ? <p className="text-danger" style = {{fontWeight: '400'}}>Content Not Found</p> 
                : null }
            
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.posts.statusError
    }
}

Search.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { createPost })(Search);