import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchWeatherData} from '../actions/index';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { value: '' };
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchWeatherData(this.state.value);
    }
    render() {
        return (
                <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange} 
                    />
                <button type="submit" onClick={this.handleSubmit}>Search</button>
                </div>
           );
    }
}

export default connect(null, { fetchWeatherData })(SearchBar);