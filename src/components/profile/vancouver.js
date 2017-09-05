import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesList from './places_list';
import PlacePictures from './place_pictures';


class Vancouver extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      return;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-3">
            <PlacesList />
        </div>
        <div className="col-xs-12 col-md-9">
            <PlacePictures />
        </div>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Vancouver);
