import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router";
import ReactDOM from "react-dom";
import { Editor, Content } from "../../index";
import TestForms from "./TestForms";


class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index + 1,
      step: 1,
      content: []

    };
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }
  
  componentDidMount() {
      //console.log("this is wizard.js length");
    this.setState({
      content: JSON.parse(this.props.content)
    });
      //console.log(this.props.content);
  }

   // Notice the shorthand method syntax. Otherwise lifecycle methods are exactly the same
componentDidUpdate(prevProps, prevState) {
  console.log(prevState)
    if (this.state.content !== prevProps) {
      //console.log("Updated");
      //console.log("Previous state:", prevState);
      //console.log("Current state:", this.state);
    }
  }

  handleButtonClick(e) {
    let value = e.target.id;
    this.setState({
      step: value
    });

    let step = this.state.step;
    //console.log(step);

    this.props.getSteps(step)

    if(this.state.index == "" ){
      //console.log(this.state.index)
      return <TestForms />
    }
  }

  render() {

    return (
      <form className="container-fluid p-0">
      
        <div  className="row setup-content" id={"step-" + this.state.index}>
          <div className="col-sm-16 col-md-12 col-lg-16">
            <div className="row">
              <div className="col-sm-16 text-center">
                <h3 className=" mb-2"> Step {this.state.index}</h3>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-16 col-md-12 col-lg-12">
                <div className="form-group">
                  <Content content={this.state.content}/>
                </div>
              </div>
            </div>
            <div className="wizard-footer">
              <div className="col-sm-16 ">
                <button
                  className="btn btn-primary nextBtn btn-lg pull-right"
                  type="button"
                  id={this.state.index}
                  onClick={this.handleButtonClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }
}

export default WizardForm;
