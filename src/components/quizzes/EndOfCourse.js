import React, { Component } from "react";
import API from "../utils/API";

class EndOfCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Getting all quotes once the component has mounted
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Question 1</label>
          <input
            type="text"
            className="form-control"
            id="q1"
            aria-describedby=""
            placeholder="Answer Here"
          />
        </div>
        <div className="form-group">

          <label>Question 2</label>
          <input
            type="text"
            className="form-control"
            id="q2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">

          <label>Question 3</label>
          <input
            type="text"
            className="form-control"
            id="q3"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="3" />
        </div>
      </div>
    );
  }
}

const styles = {
  labelStyle: {
    position: "relative",
    bottom: 6,
    textAlign: "right"
  },
  groupForm: {
    marginBottom: 0
  }
};
export default EndOfCourse;
