import React, { Component } from 'react'
import API from '../utils/API'
import { Editor, Content } from 'react-content-builder'

//import { Button } from 'reactstrap';


class CoursesPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCourse: "true", //default false
      icourseId: ""
    };

    // Binding getQuotes to this component since we'll be passing this method to 
    // other components to use
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }



  handleButtonClick(e) {
    console.log("CLICK");
    console.log(this.state);

    var newId = {};
    newId["icourseId"] = e.target.id;
    var newState = {};
    newState["isCourse"] = "false";
    console.log(newState);
    this.props.setCourse(newId, newState);

   
   // this.setState(newState);

    //this.setState({ isCourse: false });
    //console.log(this.state.isCourse);
    //this.props.update(e.target.id);


  }

  render () {
    
    return (
      <div className='col-md-3 col-sm-6'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            {
              /*Delete Button is for Admin Only
              <i onClick={() => this.deleteQuote(this.props.quote._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
              />
            */}
            {this.props.course.course_name}

            <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
            id={this.props.course._id}
            > Enter Course
            
          </button>
          </div>
        </div>
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
  },
  buttonStyle: {
    float: 'right'
  }

}

export default CoursesPanel
