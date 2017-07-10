import React, { Component } from 'react'
import SidebarRight from './common/SidebarRight'
import API from './utils/API'
import LessonPanel from './common/LessonPanel'
import ReactDOM from 'react-dom'
import { Editor, Content } from '../index'

class Lessons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lessons: [],
      lessonID: '',
      courseID: '',
      isLesson: true,
      courseName: '',
      content: [],
      beginCourse: false,
      start_date: ""
    }

    this.getLessons = this.getLessons.bind(this)
    this.handleLessonClick = this.handleLessonClick.bind(this)
    this.returnContent = this.returnContent.bind(this)
    this.startButton = this.startButton.bind(this)
  }

  // Getting all quotes once the component has mounted
  componentDidMount () {
    this.setState({ courseID: this.props.getThisCourseId.icourseId, courseName: this.props.getCourseName })
    this.getLessons()
  }

  getLessons () {
    console.log('this.props.getThisCourseId : ' + this.props.getThisCourseId.icourseId)
    API.getLessons(this.props.getThisCourseId.icourseId).then((res) => {
      const lessonList = res.data.filter(lesson => lesson.course_name)
      this.setState({ lessons: lessonList})
    })
  }

  handleLessonClick (body) {
    console.log('lesson clicked')
    console.log(body)
    this.setState({ content: JSON.parse(body)})
    console.log(this.state.content)
  }
  renderLessonsPanel () {
    // A helper method for rendering one panel for each quote 
    return this.state.lessons.map(lesson => (
      <LessonPanel
        lesson={lesson}
        key={lesson._id}
        getLessons={this.getLessons}
        setLesson={this.state.isLesson}
        courseid={this.state.courseID}
        lessons={this.state.lessons}
        handleLessonClick={this.handleLessonClick} />
    ))
  }

  startButton() {
    this.setState({ 
      content: JSON.parse(this.state.lessons[0].body)
    })
  }
  returnContent () {
      return (
        <div>
        <Content content={this.state.content} />
        </div>
      )
    
  }

  render () {
    return (

      <div>
        <div className='row  align-items-center justify-content-between'>
          <div className='col-11 col-sm-12 page-title'>
            <h3>Lessons</h3>
            <p>
              Course:
              {this.state.courseName}
            </p>
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
                <h6 className='card-title'>Lessons</h6>
              </div>
              <div className='card-block'>
                <div className='col-md-12'>
                  <div className='col-md-3'>
                    <div className='sidebar-rightright'>
                      <div className='col-md-16 col-lg-16 col-xl-16'>
                        <div className='card full-screen-container'>
                          <div className='card-header align-items-start justify-content-between flex'>
                            <h5 className='card-title pull-left'>{this.state.courseName}</h5>
                            <ul className='nav nav-pills card-header-pills pull-right'>
                              <li className='nav-item'>
                                <button className='btn btn-sm btn-link btn-round fullscreen-btn'>
                                  <i className='fa fa-arrows-alt'></i>
                                </button>
                              </li>
                              <li className='nav-item'>
                                <button
                                  className='btn btn-sm btn-link btn-round'
                                  data-toggle='dropdown'
                                  aria-haspopup='true'
                                  aria-expanded='false'>
                                  <i className='fa fa-chevron-down'></i>
                                </button>
                                <div className='dropdown-menu'>
                                  <a className='dropdown-item' href='#'><i className='fa fa-calendar mr-2'></i>Quarter 1</a> <a className='dropdown-item' href='#'><i className='fa fa-calendar mr-2'></i>Quarter 2</a>                            <a className='dropdown-item' href='#'><i className='fa fa-calendar mr-2'></i>Quarter 3</a> <a className='dropdown-item' href='#'><i className='fa fa-calendar mr-2'></i>Quarter 4</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className='card-block'>
                            <div className='list-unstyled comment-list'>
                              {this.renderLessonsPanel()}
                            </div>
                          </div>
                          <div className='card-footer text-center'>
                            <a href='#'>View all...</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    {this.returnContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const styles = {
  formStyle: {
    width: 450

  }
}
export default Lessons