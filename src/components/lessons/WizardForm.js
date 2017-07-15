import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router";
import { Editor, Content } from "../../index";
import EndOfCourse from "../quizzes/EndOfCourse";

class CourseQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index + 1,
      step: 1,
      content: [],
      lastIndexId: "",
      btnText: "",
      btntype: "button"
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

  }

  // Notice the shorthand method syntax. Otherwise lifecycle methods are exactly the same
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState);
  }

  handleQuiz() {
    //console.log("handling quiz");
    //console.log(this.props.length);
    let length = this.props.length - 1;
    //console.log(length);
    if (this.props.index < length) {
      return <span><Content content={this.state.content} /></span>;
    } else {
      return (
        <div>
          <EndOfCourse />
        </div>
      );
    }
  }

  handleButtonClick(e) {
    let value = e.target.id;

    if(e.target.id == this.props.length){
      setState({
        btnText: "Submit"
      })

    }

    this.setState({
      step: value
    });

    let step = this.state.step;
    //console.log(step);

    this.props.getSteps(step);
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
                  type={this.state.btntype}
                  id={this.state.index}
                  onClick={this.handleButtonClick}
                >
<i className="fa fa-arrow-circle-o-right"></i> 
                </button>
                {" "}

                {" "}
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }
}

export default CourseQuiz;
