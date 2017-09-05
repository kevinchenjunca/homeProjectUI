import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './weather_list';

export default class WeatherForecast extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      return;
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

