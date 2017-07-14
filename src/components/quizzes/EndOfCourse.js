import React, { Component } from "react";
import API from "../utils/API";
import ReactDOM from "react-dom";

class EndOfCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Getting all quotes once the component has mounted
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="form-group">
          <label for="q1">Question 1</label>
          <input
            type="text"
            className="form-control"
            id="q1"
            aria-describedby=""
            placeholder="Answer Here"
          />
        </div>
        <div className="form-group">

          <label for="q2">Question 2</label>
          <input
            type="email"
            className="form-control"
            id="q2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">

          <label for="q3">Question 3</label>
          <input
            type="email"
            className="form-control"
            id="q3"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div class="form-group">
          <label for="exampleTextarea">Example textarea</label>
          <textarea class="form-control" id="exampleTextarea" rows="3" />
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
