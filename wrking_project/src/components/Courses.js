import React, { Component } from 'react'
import CoursesPanel from './common/CoursesPanel'
import API from './utils/API'
import { Editor, Content } from 'react-content-builder'
import LessonPanel from './common/LessonPanel'

class Courses extends Component {
  constructor () {
    super()
    this.state = {
      courses: [],
      icourseId: '',
      isCourse: ''

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
  getCourses () {
    API.getCourses().then((res) => {
      const courseList = res.data.filter(course => course.course_name)
      this.setState({ courses: courseList })
    })
  }

  setCourse (id, bool) {
    console.log(id, bool)
    this.setState({ isCourse: bool, icourseId: id })

    console.log(this.state.isCourse)
  }

  // A helper method for rendering one panel for each quote 
  renderCourses () {
    return this.state.courses.map(course => (
      <CoursesPanel
        course={course}
        key={course._id}
        getCourses={this.getCourses}
        setCourse={this.setCourse} />
    ))
  }
  render () {
    if (this.state.isCourse == '') {
      return (
        <div>
          <div className='jumbotron text-center'>
            <h1>Courses</h1>
            <p>
              Select Course to Begin
            </p>
          </div>
          <div className='container'>
            <div className='row'>
              {this.renderCourses()}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <LessonPanel/>
        </div>
      )
    }
  }
}
export default Courses
