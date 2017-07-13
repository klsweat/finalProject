import React, { Component } from 'react'
import QuizContent from './QuizContent'
import { Editor1, Content } from 'react-content-builder'
import API from '../utils/API'
import { Link } from 'react-router'

class QuizFrame extends Component {
  constructor () {
    super()
    this.state = {
      content: [
        {
          cols: [
            {
              params: { width: 'quarter' }
              
            },
            {
              params: { width: 'eight' },
              elements: [
                { type: 'Headline', params: { hl: 'Form Content Builder' } },
                {
                  type: 'Text',
                  params: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                  }
                }
              ]
            },
            {
              params: { width: 'quarter' }
             
            }
          ]
        }
      ],
      files: [],
      course_name: '',
      parent_course: '',
      emptyCourseId: false,
      parent_courses: []

    }

    this.getNewContent = this.getNewContent.bind(this)
    this.refresh = this.refresh.bind(this)
    this.getParentCourses = this.getParentCourses.bind(this)

  }

  componentDidMount () {
    console.log(this.state.content)
    this.getNewContent()
  }

  getParentCourses () {
	  console.log("get courses");
		API.getParentCourse().then(res => {
		const courseList = res.data.filter(course => course.course_name);	  
		this.setState({ parent_courses: courseList });
	});
  }

  getNewContent (c) {
    this.setState({
      content: c
    })
    console.log(c)
    this.state.content = c
    console.log(this.state.content)
  }

  refresh (e) {
    window.location.reload();
  }

  render () {
    return (
      <div>
        <div className='row  align-items-center justify-content-between'>
          <div className='col-11 col-sm-12 page-title'>
            <h3>Create Training Quiz</h3>
            <button
              onClick={this.refresh}
              value="true"
              style={styles.buttonStyle}
              type='button'
              className={location.pathname === '/create_quiz' && 'btn btn-outline-primary'}>
              <Link to='/create_quiz'> Add New Quiz
              </Link>
            </button>
            <button type='button' className='btn btn-outline-secondary'>
              Edit Quiz
            </button>
          </div>
          <div className='col text-right '>
            <div className='btn-group pull-right' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-16'>
            <div className='card'>
              <QuizContent content={this.state.content} ParentCoursesFunc={this.getParentCourses} listParentC={this.state.parent_courses} />
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

export default QuizFrame
