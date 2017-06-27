import React, { Component } from 'react'
import SimpleApp from './common/SimpleApp'
import { Editor, Content } from 'react-content-builder'
import API from './utils/API'
let content = [{'cols': [{'params': {'width': 'third'},'elements': [{'type': 'TextAndHeadline','params': {'text': 'This is a configurable **Drag and Drop Content Builder for React.js** applications.\n  \nIt supports **Markdown**','hl': 'Welcome!'}}]}, {'params': {'width': 'third'},'elements': [{'type': 'Headline','params': {'hl': 'react-content-builder'}}, {'type': 'Text','params': {'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}}]}, {'params': {'width': 'third'},'elements': [{'type': 'Headline','params': {'hl': 'Highly adaptable '}}, {'type': 'Text','params': {'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}}]}]}]

class CreateCourse extends Component {
  constructor () {
    super()
    this.state = {
      content: []
    }
  }

  componentDidMount () {
    this.getCourses()
  }

  getCourses () {
    let content = [{'cols': [{'params': {'width': 'third'},'elements': [{'type': 'TextAndHeadline','params': {'text': 'This is a configurable **Drag and Drop Content Builder for React.js** applications.\n  \nIt supports **Markdown**','hl': 'Welcome!'}}]}, {'params': {'width': 'third'},'elements': [{'type': 'Headline','params': {'hl': 'react-content-builder'}}, {'type': 'Text','params': {'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}}]}, {'params': {'width': 'third'},'elements': [{'type': 'Headline','params': {'hl': 'Highly adaptable '}}, {'type': 'Text','params': {'text': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}}]}]}]

    API.getCourses().then((res) => {
      this.setState({
        content: res.data
      })
    })
  }

  render () {
    return (
      <div>
        <SimpleApp content={content} />,
      </div>
      )
  }
}

export default CreateCourse