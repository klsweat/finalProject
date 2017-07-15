import React, { Component } from "react";
import API from "../utils/API";
import ReactDOM from "react-dom";
import CourseList from "./CourseList";

import { Editor, Content } from "../../index";



class QuizContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      content: props.content,
      parent_courses: props.listParentC,
      course_id: "",
      parent_id: "",
	    courseExists: "",
      quiz_name: "",
      courses: []     
    };
    this.handleCourseForm = this.handleCourseForm.bind(this);
    this.getCourses = this.getCourses.bind(this);
    this.handleParentSelect = this.handleParentSelect.bind(this);


    this.edit = () => {
      const newCourseName = this.state.course_name;
      const isParent = this.state.isParent;
      const parentID = this.state.parent_id;

      this.setState({
        editing: true,
        course_name: newCourseName,
        parent_id: parentID,
        isParent: isParent
      });


      if(this.state.course_id == ""){
	      API.saveCourse(this.state).then(data => {
        console.log("data");
        console.log("thise course id: " + data);
		    this.setState({ course_id: data });
        });
      }
	
    };

   /**********************************************
	 * SUBMITTING THE NEW COURSE CONTENT
	 *********************************************/
    this.save = (c) => {
      this.props.gnc(c);
      this.setState({ editing: false, content: c });
      console.log("button clicked");
      console.log(this.state.content);
      console.log(props.content);

      this.state.content = c;
      const updateCourse = this.state;

      console.log(updateCourse);
      API.updateCourse(updateCourse).then(this.props.getCourses);

      console.log("newcourse:", updateCourse);
    };
  }
  // Getting all quotes once the component has mounted
  componentDidMount() {
   
    this.getCourses();

    console.log("refresh");
    console.log(this.state.emptyCourseId);
  }

  handleCourseForm(event) {
    this.setState({
      course_name: event.target.value
    });

	console.log(event.target.value);
  }

  handleParentSelect(parent) {
    let parentSelect = parent.target.value;

    this.setState({
      parent_id: parent.target.value
    });

    console.log(this.state.isParent);
  }

  getCourses(id) {
	  console.log("get courses");
		API.getCourses().then(res => {
		const courseList = res.data.filter(course => course.course_name);	  
		this.setState({ courses: courseList });
	});

  }

  // A helper method for rendering one panel for each quote
  renderCourses() {
    return this.state.courses.map(course =>
      <CourseList
        course={course}
        key={course._id}
        getCourses={this.getCourses}
        setCourse={this.setCourse}
      />
    );
  }

  // A helper method for rendering course name
  renderCourseName() {
    if (this.state.course_id == "") {
      return (
        <form>

          <div style={styles.groupForm} className="form-group row">
            <label
              style={styles.labelStyle}
              className="col-md-2 col-lg-3 col-form-label"
            >
              Quiz Name:
            </label>
            <div className="col-md-3">
              <input
                className="form-control"
                type="text"
                id="example-text-input"
                onChange={this.handleCourseForm}
              />
            </div>

            <label
              style={styles.labelStyle}
              className=" col-md-2 col-lg-3 col-form-label"
            >
              Assign Quiz to Course:
              {" "}
            </label>
            <div className="col-md-4">
              <select
                className="form-control"
                onChange={this.handleParentSelect}
              >
                <option value="">-- SELECT --</option>
                {this.renderCourses()}
              </select>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          {this.state.course_name}
        </div>
      );
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <div>

          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <h6 className="card-title">
                  {this.state.quiz_name}
                </h6>
              </div>
            </div>

          </div>
          <div className="card-block">
            <Editor content={this.state.content} save={this.save} />
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <div className="card-header">
            <h6 className="card-title">

              {this.renderCourseName()}

            </h6>
          </div>
          <div className="card-block">
            <Content content={this.state.content} />

          </div>

          <div style={{ margin: "40px", textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.edit.bind(this)}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}

const styles = {
  labelStyle: {
    position: "relative",
    bottom: 6,
    textAlign: "right"
  },
  groupForm: {
    marginBottom: 0
  }
};
export default QuizContent;
