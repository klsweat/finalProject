import React, { Component } from 'react'
import LessonPanel from './common/LessonPanel'
import CoursesPanel from './common/CoursesPanel'
import API from './utils/API'
import { Editor, Content } from 'react-content-builder'

class Lessons extends Component {
  constructor () {
    super()
    this.state = {
      courseId: "",
      lessons: []
    }

    // Binding getQuotes to this component since we'll be passing this method to 
    // other components to use
    this.getLessons = this.getLessons.bind(this)
    this.setCourse = this.setCourse.bind(this);

  }
  // Getting all quotes once the component has mounted
  componentDidMount () {
    this.getLessons()
  }
  getLessons () {
   // API.getLessons().then((res) => {
   //   console.log(res.data[0].body)
    //  this.setState({ lessons: res.data})
    //  console.log(this.renderLessons())

    // console.log(this.state.courses)
   // })
  }

   setCourse(term) {
    this.setState({
      courseId: term
    });
  }
  // A helper method for rendering one panel for each lesson
  renderLessons () {
    console.log(this.state.lessons);

    var result = this.state.lessons.map(lesson => {
      if (typeof lesson.body == 'string') { lesson.body = JSON.parse(lesson.body);}
      return (
        <LessonPanel 
        lesson={lesson} key={lesson._id} getLessons={this.getLessons} />
      )}
    )
    console.log(this.state.lessons);
    return result;
  }
  render () {
    return (
      <div>
        {/*<Content content={this.state.courses} />*/}
        {/*<Content content={this.renderCourses} />*/}
        {/*<Content content={[{"cols":[{"params":{"width":"third"},"elements":[{"type":"TextAndHeadline","params":{"text":"This is a configurable **Drag and Drop Content Builder for React.js** applications.\n \nIt supports **Markdown**","hl":"Welcome!"}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"react-content-builder"}},{"type":"Text","params":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}]},{"params":{"width":"third"},"elements":[{"type":"Headline","params":{"hl":"Highly adaptable "}},{"type":"Text","params":{"text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}}]}]}]} />*/}
        {this.renderLessons()}
      </div>
    )
  }
}

export default Lessons
