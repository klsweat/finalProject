import React, { Component } from "react";
import API from "../utils/API";

class CourseList extends Component {
  // favoriteQuote toggles a quote's favorite status in the db and then
  // reloads all quotes in our app
  listCourse(course) {
    API.getCourse(course).then(this.props.getCourses);
  }

  render() {
    return (
      <option value={this.props.course._id}>{this.props.course.course_name}</option>
    );
  }
}



export default CourseList;
