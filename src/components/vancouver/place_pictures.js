import React, { Component } from 'react';
import { connect } from 'react-redux';
class PlacePictures extends Component {


  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    this.setState({pos:0, disable:false});
  }

  componentWillReceiveProps(nextProps) {
      this.setState({pos:0, disable:false});

  }  

  handleImageLoaded() {
      this.state.disable=false;
      this.forceUpdate();      
  }


  onPreClick() {  
    this.state.pos--;
    this.state.disable = true;
    this.forceUpdate();
  }

  onNextClick() {
    this.state.pos++;
    this.state.disable = true;    
    this.forceUpdate();    
  }

  renderButton() {
    if (this.props.place.pics.length == 1 || this.props.place.pics.length == 0) {
        return (
            <div className="imgeButtonDiv">
            </div>
        )
    }
    if (this.state.pos == 0 ) {
        return (
            <div className="imgeButtonDiv">
                <button className="btn btn-primary" disabled={this.state.disable} onClick={this.onNextClick.bind(this)}>Next</button>
            </div>
        )

    } else if (this.state.pos == this.props.place.pics.length-1) {

        return (
            <div className="imgeButtonDiv">
                <button className="btn btn-primary imageBtn" disabled={this.state.disable} onClick={this.onPreClick.bind(this)}>Prev</button>
            </div>
        )

    } else {
        return (
            <div className="imgeButtonDiv">
                <button className="btn btn-primary imageBtn" disabled={this.state.disable} onClick={this.onPreClick.bind(this)}>Prev</button>
                <button className="btn btn-primary" disabled={this.state.disable} onClick={this.onNextClick.bind(this)}>Next</button>
            </div>
        )      
    }

  }

  render() {

    if (!this.props.place) {
      return <div></div>;
    }
    console.log(this.state.pos);
    return (
      <div>
        {this.renderButton()}
        <div>
          <img src={this.props.place.pics[this.state.pos]} onLoad={this.handleImageLoaded.bind(this)} className="image-responsive" width="800" height="600"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    place: state.vancouver.selectedPlace
  };
}

export default connect(mapStateToProps)(PlacePictures);
