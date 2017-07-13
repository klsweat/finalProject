import React, { Component } from "react";
import API from "../utils/API";
import { Editor, Content } from "react-content-builder";
import Moment from "react-moment";
import { Link } from 'react-router'

//import { Button } from 'reactstrap';

class CoursesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCourse: true, //default false
      icourseId: "",
      course_name: "",
      status: "",
      date: ""
    };

    // Binding getQuotes to this component since we'll be passing this method to
    // other components to use
    this.handleButtonClick = this.handleButtonClick.bind(this);


  }


  handleButtonClick(e) {
    //console.log("CLICK");
    //console.log(this.state);

    var newId = {};
    newId["icourseId"] = e.target.id;
    var newState = false;
    var newName = e.target.value;
    var status = "In Progress";
    var date = new Date();

    console.log(e.target.value);
    //console.log(newState);
    this.props.setCourse(newId, newState, newName, status, date);
    //console.log(new Date().toISOString());


    // this.setState(newState);

    //this.setState({ isCourse: false });
    //console.log(this.state.isCourse);
    //this.props.update(e.target.id);


  }

  render() {
    return (
      <div className="col-md-5 col-sm-6">

        <div className="card text-center text-white">
          <div className="p-2 mb-2 blue-gradient"> {this.props.course.status} </div>
          <div className="card-block">
            <h4 className="card-title text-white">
              {this.props.course.course_name}
            </h4>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <center>
              <Link to="/lessons">
              <button
                onClick={this.handleButtonClick}
                className="btn btn-outline-white"
                style={styles.buttonStyle}
                id={this.props.course._id}
                value={this.props.course.course_name}
              >
                Begin
              </button>
              </Link>
            </center>
          </div>
          <div className="card-footer "> 2 days ago </div>
        </div>

      </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    color: "black"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default CoursesPanel;
