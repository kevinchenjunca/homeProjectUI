import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlace } from '../../actions/index';

class PlacesList extends Component {
  onClick(place) {  
    this.props.selectPlace(place);
  }  
  renderList() {
    return this.props.places.map(place => {
      return (
        <li
          key={place.key}
          onClick={() => {this.onClick(place)} }
          className="list-group-item">
          {place.name}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group museumName">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {

  return {
    places: state.vancouver.places
  };
}

export default connect(mapStateToProps, {selectPlace})(PlacesList);
