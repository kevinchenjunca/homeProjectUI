import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Activation extends Component {
  componentWillMount() {
    if (this.props.location.query.token) {
      this.props.activate(this.props.location.query.token);      
    }
  }

  render() {
    if (this.props.message) {
      return (
          <div className="alert alert-success" role="alert">{this.props.message}</div>
      )    
    } else if (this.props.error) {
      return (
          <div className="alert alert-danger" role="alert">{this.props.error}</div>
      )         
    }
      return (
          <div className="alert alert-success" role="alert">Please wait ...</div>
      )

  }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message,
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Activation);
