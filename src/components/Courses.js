import React, { Component } from 'react'
import CoursesPanel from './common/CoursesPanel'
import API from './utils/API'
import { Editor, Content } from 'react-content-builder'
import Lessons from './Lessons'

class Courses extends Component {
  constructor () {
    super()
    this.state = {
      courses: [],
      icourseId: '',
      isCourse: true,
      isLesson: false,
      courseName: "",
      status: "",
      date: Date

    }

    // Binding getQuotes to this component since we'll be passing this method to 
    // other components to use
    this.getCourses = this.getCourses.bind(this)
    this.setCourse = this.setCourse.bind(this)
  }
  // Getting all quotes once the component has mounted
  componentDidMount () {
    this.getCourses()
  }

  //Get Parent Courses, based on User ID
  getCourses () {
    let user_id = "1234";
    API.getParentCourse(user_id).then((res) => {
      const courseList = res.data.filter(course => course.course_name)
      this.setState({ courses: courseList })
    })
  }

  setCourse (id, bool, name, status, date) {
   console.log(id, bool, name, status, date)
    this.setState({ isCourse: bool, icourseId: id, courseName: name, status: status, date: date })
    
    console.log(this.state.date)
    API.updateDate(date, id.icourseId).then(res => {
      console.log(res.data);
    });

  }

  // A helper method for rendering one panel for each quote 
  renderCourses () {
       console.log(this.state.isCourse)

    console.log("setcourse")
    console.log(this.state);

    return this.state.courses.map(course => (
      <CoursesPanel
        course={course}
        key={course._id}
        getCourses={this.getCourses}
        setCourse={this.setCourse} />
    ))
  }
  render () {
       console.log(this.state.isCourse)

    if (this.state.isCourse) {
      return (
<div>
        <div className='row  align-items-center justify-content-between'>
          <div className='col-11 col-sm-12 page-title'>
            <h3>Courses</h3>
          </div>
          <div className='col text-right '>
            <div className='btn-group pull-right'>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-16'>
            <div className='card'>
              <div className='card-header'>
                <h6 className='card-title'>Select Course to Begin</h6>
              </div>
              <div className='card-block' style={styles.bg}>
                <div className='col-md-12'>
                  
                    {this.renderCourses()}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      )
    } else {
      return (
        <div>
          <Lessons getThisCourseId={this.state.icourseId} getCourseName={this.state.courseName} />
        </div>
      )
    }
  }
}

const styles = {
  bg: {
    color: "black"
  }
}



export default Courses
