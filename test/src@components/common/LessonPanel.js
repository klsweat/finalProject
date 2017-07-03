import React, { Component } from 'react'
import API from '../utils/API'
import { Editor, Content } from 'react-content-builder'

class LessonPanel extends Component {

  render () {
    return (

      <div>
        <h2>Lessons</h2>
      </div>
    )
  }
}

const styles = {
  favoriteStyle: {
    cursor: 'pointer',
    marginRight: 5,
    float: 'left'
  },
  deleteStyle: {
    cursor: 'pointer',
    marginLeft: 5,
    color: 'red',
    float: 'right'
  }
}

export default LessonPanel
