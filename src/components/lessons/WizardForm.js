import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router";
import ReactDOM from "react-dom";
import { Editor, Content } from "../../index";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index + 1,
      step: 1,
      content: [],
      lastIndexId: ""
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleQuiz = this.handleQuiz.bind(this);
  }

  componentDidMount() {
    //console.log("this is wizard.js length");
    this.setState({
      content: JSON.parse(this.props.content)
    });
    //console.log(this.props.content);
    console.log(this.props.lastIndex._id);
    this.setState({
      lastIndexId: this.props.lastIndex._id
    });
  }

  // Notice the shorthand method syntax. Otherwise lifecycle methods are exactly the same
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  handleQuiz() {
    console.log("handling quiz");
    console.log(this.props.length)
    let length = this.props.length - 1;
    console.log(length)
    if (this.props.index < length) {
     return <span><Content content={this.state.content} /></span>;
    } else {
      <p>this is quiz</p>
    }
  }

  handleButtonClick(e) {
    let value = e.target.id;
    this.setState({
      step: value
    });

    let step = this.state.step;
    //console.log(step);

    this.props.getSteps(step);

    if (this.state.index == "") {
      //console.log(this.state.index)
      return <TestForms />;
    }
    console.log("length");

    console.log(this.props.length);
  }

  render() {
    return (
      <form className="container-fluid p-0">

        <div className="row setup-content" id={"step-" + this.state.index}>
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
                  {this.handleQuiz()}

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
