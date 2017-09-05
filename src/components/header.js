import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory} from 'react-router';
import * as actions from '../actions';
import { Link } from 'react-router';

class Header extends Component {
  signOut() {
    this.props.signoutUser();
    browserHistory.push('/');    
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className='nav-item'>
         <a  href="#" onClick={this.signOut.bind(this)}>Logout</a>
        </li>
      )

    } else {
      return [
        <li className="nav-item" key={1}>
           <Link className="nav-link" to="/signup">Register</Link>
        </li>,      
        <li className='nav-item' key={2}>
            <Link className="nav-link" to="/signin">Login</Link>
        </li>
      ]
    }
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                  
                </button>
                <Link to="/home" className="navbar-brand">ReactJs</Link>
            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
            
              <ul className="nav navbar-nav">
                <li className="nav-item" key={1}>
                  <Link className="nav-link" to="/vancouver">Vancouver</Link>
                </li>              
                <li className="nav-item" key={2}>
                  <Link className="nav-link" to="/youtubesearch">YouTube Search</Link>
                </li>
                <li className="nav-item" key={3}>
                  <Link className="nav-link" to="/weatherforecast">Weather Forecast</Link>
                </li>                
              </ul>

              <ul className="nav navbar-nav navbar-right">
                  {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, actions)(Header);































