import React, { Component } from "react";
import API from "../utils/API";

//import { Button } from 'reactstrap';

class CoursesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCourse: "true", //default false
      icourseId: ""
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
    var newState = {};
    newState["isCourse"] = "false";
    //console.log(newState);
    this.props.setCourse(newId, newState);

    // this.setState(newState);

    //this.setState({ isCourse: false });
    //console.log(this.state.isCourse);
    //this.props.update(e.target.id);
  }

  render() {
    if (this.state.course_id == "") {
      return (
        <form>
          <label>Course Name:</label>
          <input type="text" name="name" onChange={this.handleCourseForm} />

          <label>Parent Course</label>

        </form>
      );
    } else {
      <div>
        {this.state.course_name}
      </div>;
    }
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  },
  buttonStyle: {
    float: "right"
  }
};

export default CoursesPanel;
