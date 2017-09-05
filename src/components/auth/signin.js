import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.buttonLabel = "Sign in";
  }

  componentWillUnmount() {
    this.props.cleanMessage();  
  }

  handleFormSubmit({email, password}) {
    this.buttonLabel = "Processing...";    
    this.props.signinUser({email, password});
    //Need to do something to log user in
  }
  renderAlert() {
    this.buttonLabel = "Sign in";    
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  renderField(field) {
    return (
      <fieldset className="form-group">
        <lable>{field.label} </lable>
        <input {...field.input} type={field.type} className="form-control"/>
      </fieldset>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
        <div className="row">
            <div className="col-sm-offset-3 col-sm-3">     
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <Field name="email" label="Email:" type="text" component={this.renderField}/>
                  <Field name="password" label="Password:" type="password" component={this.renderField}/>
                  <button action="submit" className="btn btn-primary">{this.buttonLabel}</button>
                  {this.renderAlert()}
                </form>
            </div>        
        </div> 
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'SigninForm'
})(
  connect(mapStateToProps, actions)(Signin)
);
