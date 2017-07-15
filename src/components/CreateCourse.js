import React, { Component } from 'react'
import SimpleApp from './common/SimpleApp'
import { Editor1, Content } from 'react-content-builder'
import API from './utils/API'
import { Link } from 'react-router'

class CreateCourse extends Component {
  constructor () {
    super()
    this.state = {
      content: [
        {
          cols: [
            {
              params: { width: 'half' },
              elements: [
                {
                  type: 'TextAndHeadline',
                  params: {
                    text: "This is a configurable **Drag and Drop Content Builder for creating training courses**.\n  \nIt's easy, just enter the course name you would like to create, then select if it is a parent course, or a lesson, then select edit.",
                    hl: 'Welcome!'
                  }
                }
              ]
            },
            {
              params: { width: 'third' },
              elements: [
                { type: 'Headline', params: { hl: 'Course Content Builder' } },
                {
                  type: 'Text',
                  params: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  }
                }
              ]
            },
            {
              params: { width: 'quarter' },
              elements: [
                { type: 'Headline', params: { hl: 'Highly adaptable ' } },
                {
                  type: 'Text',
                  params: {
                    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                  }
                }
              ]
            }
          ]
        }
      ],
      files: [],
      course_name: '',
      parent_course: '',
      emptyCourseId: false

    }

    this.getNewContent = this.getNewContent.bind(this)
    this.getCourses = this.getCourses.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount () {
    //console.log(this.state.content)
    this.getNewContent()
  }

  getCourses () {
    API.getCourses().then(res => {
    })
  }

  getNewContent (c) {
    this.setState({
      content: c
    })
    //console.log(c)
    this.state.content = c
    //console.log(this.state.content)
  }

  refresh (e) {
    window.location.reload();
  }

  render () {
    return (
      <div>
        <div className='row  align-items-center justify-content-between'>
          <div className='col-11 col-sm-12 page-title'>
            <h3>Create Courses and Lessons</h3>
            <button
              onClick={this.refresh}
              value="true"
              style={styles.buttonStyle}
              type='button'
              className={location.pathname === '/createcourse' && 'btn btn-outline-primary'}>
              Add Training Course
            </button>
            <button type='button' className='btn btn-outline-secondary'>
              Edit Course
            </button>
          </div>
          <div className='col text-right '>
            <div className='btn-group pull-right' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-16'>
            <div className='card'>
              <SimpleApp content={this.state.content} gnc={this.getNewContent} refresh={this.state.emptyCourseId}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  buttonStyle: {
    marginRight: 22
  }

}

export default CreateCourse
