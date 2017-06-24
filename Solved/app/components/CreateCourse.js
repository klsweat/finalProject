import React, { Component } from "react";
import SimpleApp from './common/SimpleApp';
import API from "./utils/API";

class CreateCourse extends Component {
  constructor() {
    super();
    this.state = {
      content: []
    };
    
  }

  componentDidMount() {
    this.getCourses();
  }
  
  getCourses() {
    API.getCourses().then((res) => {
      this.setState({
        content: res.data
      });
    })
  }
 
	render(){
	return (
    <div>
      
      <SimpleApp content={content} />
    </div>
  );	
	
}
}


export default CreateCourse;


