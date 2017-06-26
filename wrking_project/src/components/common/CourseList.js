import React, { Component } from "react";
import CourseListPanel from "./common/CourseListPanel";
import API from "./utils/API";

class CourseList extends Component {
  constructor() {
    super();
    this.state = {
      listOfCourses: []
    };
    // Binding getCourseList to our component since we'll be passing this
    // method to child components
    this.getCourseList = this.getCourseList.bind(this);
  }
  // Getting all courses assigned to User when the component mounts
  componentDidMount() {
    this.getCourseList();
  }
  getCourseList() {
    API.getCourses().then((res) => {
      const showCourseList = res.data.filter(course => course.parent_name);
      this.setState({ quotes: showCourseList });
    });
  }
  // A helper method for rendering one panel for each course
  renderCourseList() {
    return this.state.listOfCourses.map(courseList => (
      <CourseListPanel
        courseList={courseList}
        key={quote._id}
        getCourseList={this.getCourseList}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <QuoteForm
            getCourseList={this.getCourseList}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderCourseList()}
        </div>
      </div>
    );
  }
}

export default CourseList;
