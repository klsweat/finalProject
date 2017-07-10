import React, { Component } from 'react'
import { Link } from 'react-router'
import LessonPanel from './LessonPanel'
import API from '../utils/API'

class SidebarRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      icourseId: '',
      startDate: '',
      isLesson: false,
      lessons: []

    }
  }

  render () {
    return (
       <div className="media"> 
         <span className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  <i className="fa fa-check"></i></label>
                </span>
                <div className="media-body">
                  <h6 className="mt-0 mb-1" id={this.props.course._id}>
                  {this.props.lesson.course_name}
                    <small className="pull-right"></small>
                  </h6>
                    Start Date: 20 January, 2017 
                </div>
              </div>

    )
  }

}
export default SidebarRight
