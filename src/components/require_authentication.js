import React, { Component } from 'react';
import { browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { authMessage } from '../actions';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.authMessage("Please signin, if you are new user, please register a new account");
        browserHistory.push('/activation');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.authMessage("Please signin, if you are new user, please register a new account");
        browserHistory.push('/activation');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps,{authMessage})(Authentication);
}
