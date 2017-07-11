import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router";
import WizardForm from "./WizardForm";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: props.index + 1,
        steps: 1
    };
  this.linkStep = this.linkStep.bind(this);
  }

  componentDidMount() {
      //console.log("this is wizard.js length");
      console.log(this.state.index);
  }
 // Notice the shorthand method syntax. Otherwise lifecycle methods are exactly the same
componentDidUpdate(prevProps, prevState) {
    if (this.state.steps !== prevProps) {
      //console.log("Updated");
      //console.log("Previous state:", prevState);
      //console.log("Current state:", this.state);
    }
  }



linkStep(e){
    console.log(e.target.id)
    this.setState({ steps: e.target.id });
    this.props.getSteps(this.state.steps);
    console.log(this.state.steps);
  }


  render() {

    return (
      <div className="stepwizard-step col">
              <a href={"#step-" + this.state.index} className="btn btn-primary btn-round" id={this.state.index} onClick={this.linkStep}>{this.state.index}</a>
              <p>Step {this.state.index}</p>
        </div>
    );
  }
}

export default Wizard;
