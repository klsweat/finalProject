import React, { Component } from 'react'
import API from '../utils/API'
import { Link } from 'react-router'

class LessonPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      icourseId: '',
      startDate: '',
      percentDone: '',
      inProgress: false,
      incomplete: true,
      completed: false,
      isLesson: false,
      lessonSelected: []

    };
        this.handleButtonClick = this.handleButtonClick.bind(this)

  }

  renderDateStatus () {
    if (this.props.lesson.status == 'In-Progress') {
      return (
        <p>
          Start Date:
          {this.props.lesson.start_date}
        </p>
      )
    } else {
      return (
        <p>
          Status: 
          {this.props.lesson.status}
        </p>
      )
    }
  }

  handleButtonClick(e){
    var lessonClicked = e.target.id;
    console.log("lessonclicked", lessonClicked);
    
    API.getLessonContent(lessonClicked).then((res) => {
      const lessonSelected = res.data.filter(lesson => lesson.course_name)
      this.setState({ lessonSelected: lessonSelected})
     
      console.log("res.data");
      console.log(res.data);
     
      var content = this.state.lessonSelected[0].body;
      this.props.handleLessonClick(content)

      console.log("content", content);

    })
   
  }

  render () {
    return (
      <div className='media'>
        <span className='form-check'>
          <label className='form-check-label'> 
            <input type='checkbox' className='form-check-input' /> 
            <i className='fa fa-check'></i> 
          </label>
          </span>
        <div className='media-body'>
          <h6 className='mt-0 mb-1' id={this.props.lesson._id} onClick={this.handleButtonClick}>
            {this.props.lesson.course_name}
            <small className='pull-right'></small>
          </h6>
          {this.renderDateStatus()}
        </div>
      </div>

    )
  }

}

export default LessonPanel
