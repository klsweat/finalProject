import React, { Component } from "react";
import API from "../utils/API";
import {browserHistory } from "react-router";

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isAdmin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillMount() {
    document.body.classList.add("loginBackground");
  }
  componentWillUnmount() {
    document.body.classList.remove("loginBackground");
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleButtonClick() {
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    API.signIn(user).then((res) => {
     // console.log(res.data._id);
      //if (res.data) {
      //  browserHistory.push('/Dashboard/:' + res.data.id);
      //}
    });
  }


  render() {
    return (
      <div>

        <div className="wrapper-content-sign-in ">
          <div className="container text-center">
            <form className="form-signin1 smallbox">
              <h2 className="tex-black mb-4">Sign in</h2>
              <label className="sr-only">
                Email address
              </label>
              <input
                type="email"
                className="form-control validate"
                placeholder="Email address"
                id="email"
                name="email"
                onChange={this.handleInputChange}
              />
              <br />
              <label className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
                onChange={this.handleInputChange}
              />
              <br />
              <div className="checkbox">
                <label className="form-check-label active text-white">
                  <input type="checkbox" className="form-check-input" />
                  <i className="fa fa-check" />
                </label>
                Remember me
                {" "}
              </div>
              <button
                onClick={this.handleButtonClick}
                className="btn btn-lg btn-primary btn-round"
              >
                Sign in
              </button>
              <br />
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default login;
