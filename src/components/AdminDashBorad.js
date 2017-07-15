import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "./utils/API";

class AdminDashBorad extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then(res => {
      this.setState({ quotes: res.data });
    });
  }

  render() {
    return (
      <div>

        <div className="row  align-items-center justify-content-between">
          <div className="col-11 col-sm-12 page-title">
            <h3>Admin Dashboard</h3>
            <p></p>
          </div>
          <div className="col text-right ">
            <div className="btn-group pull-right">
              <button
                className="btn btn-outline-primary btn-round "
                data-toggle="modal"
                data-target="#themepicker"
              >
                <span className="text">Customize</span>
                {" "}<i className="fa fa-cogs ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-4">
            <div className="activity-block success">
              <div className="media">
                <div className="media-body">
                  <h5><span className="spincreament">504</span></h5>
                  <p>Completed</p>
                </div>
                <i className="fa fa-check-square-o" />
                {" "}
              </div>
              <br />
              <div className="media">
                <div className="media-body">
                  <span className="progress-heading">Monthly progress</span>
                </div>
                <span>
                  <span className="dynamicsparkline">Loading..</span>
                  {" "}
                </span>
                {" "}
              </div>
              <div className="row">
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={sixty}
                  >
                    <span className="trackerball" />
                  </div>
                </div>
              </div>
              <i className="bg-icon text-center fa fa-check-square-o" />
              {" "}
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-4">
            <div className="activity-block danger">
              <div className="media">
                <div className="media-body">
                  <h5><span className="spincreament">123</span></h5>
                  <p>Overdue</p>
                </div>
                <i className="fa fa-refresh" />
                {" "}
              </div>
              <br />
              <div className="media">
                <div className="media-body">
                  <span className="progress-heading">Monthly progress</span>
                </div>
                <span>
                  <span className="dynamicsparkline">Loading..</span>
                  {" "}
                </span>
                {" "}
              </div>
              <div className="row">
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={sixty}
                  >
                    <span className="trackerball" />
                  </div>
                </div>
              </div>
              <i className="bg-icon text-center fa fa-refresh" />
              {" "}
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-4">
            <div className="activity-block warning">
              <div className="media">
                <div className="media-body">
                  <h5><span className="spincreament">500</span></h5>
                  <p>In progress</p>
                </div>
                <i className="fa fa-clock-o" />
                {" "}
              </div>
              <br />
              <div className="media">
                <div className="media-body">
                  <span className="progress-heading">Monthly progress</span>
                </div>
                <span>
                  <span className="dynamicsparkline">Loading..</span>
                  {" "}
                </span>
                {" "}
              </div>
              <div className="row">
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={sixty}
                  >
                    <span className="trackerball" />
                  </div>
                </div>
              </div>
              <i className="bg-icon text-center fa fa-clock-o" />
              {" "}
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-4">
            <div className="activity-block primary">
              <div className="media">
                <div className="media-body">
                  <h5><span className="spincreament">1548</span></h5>
                  <p>New Task</p>
                </div>
                <i className="fa fa-tasks" />
                {" "}
              </div>
              <br />
              <div className="media">
                <div className="media-body">
                  <span className="progress-heading">Monthly progress</span>
                </div>
                <span>
                  <span className="dynamicsparkline">Loading..</span>
                  {" "}
                </span>
                {" "}
              </div>
              <div className="row">
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={eighty}
                  >
                    <span className="trackerball" />
                  </div>
                </div>
              </div>
              <i className="bg-icon text-center fa fa-tasks" />
              {" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-16 col-lg-8 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">Project Member</h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round">
                      <i className="fa fa-refresh" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}<a className="dropdown-item" href="#">Setting</a>
                      {" "}<a className="dropdown-item" href="#">Edit</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Close this</a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div className="list-unstyled media-list bordered">
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        John Smith - Project Manager
                      </h6>
                      New Jersey, UK
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        John Smith - Project Manager
                      </h6>
                      Ahemedabad, IN
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Marc Stuart - PHP developer</h6>
                      Ahemedabad, IN
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        MK Harshvardhan - PHP developer
                      </h6>
                      Ahemedabad, IN
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Rajeshvari - PHP developer</h6>
                      Ahemedabad, IN
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="message_userpic">
                      <img
                        className="d-flex"
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Ramakrishnan - PHP developer
                      </h6>
                      Ahemedabad, IN
                    </div>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-16 col-lg-8 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">
                  Assign Tasks <small>Today's</small>
                </h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 1
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 2
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 3
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 4
                      </a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div className="list-unstyled media-list bordered">
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-danger">Bug</span><br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        EP-123 Bug in transaction view
                      </h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-warning">Issue</span>
                      <br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        EP-152 Can not read properties...
                      </h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-info">Change</span><br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        EP-126 View moreshoud be read...
                      </h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-2">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-primary">New</span><br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">EP-124 Add email on footer</h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-danger">Bug</span><br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        EP-123 Bug in transaction view
                      </h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="media align-items-center">
                    {" "}
                    <span className="mr-3">
                      <span className="btn btn-sm btn-danger">Bug</span><br />
                      <span className="text-white">12:00pm</span>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        EP-123 Bug in transaction viewh
                      </h6>
                      Reporter: Adam Gill
                    </div>
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                      <span className="user-status bg-success " />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    {" "}
                    <span className="message_userpic ml-1">
                      <img
                        className="d-flex "
                        src="../img/user-header.png"
                        alt="Generic user image"
                      />
                    </span>
                    <div className="overlay align-items-end">
                      <button className="btn btn-success btn-round mr-2">
                        <i className="fa fa-check" />
                      </button>
                      <button className="btn btn-danger mr-2 btn-round ">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-16 col-lg-8 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">
                  Production <small>February 2017</small>
                </h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round">
                      <i className="fa fa-refresh" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}<a className="dropdown-item" href="#">Setting</a>
                      {" "}<a className="dropdown-item" href="#">Edit</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Close this</a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div id="calendar" />
              </div>
            </div>
          </div>
          <div className="col-md-16 col-lg-8 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">
                  Production <small>February 2017</small>
                </h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-outline-primary btn-round">
                      <i className="fa fa-calendar 65" /> Calendar
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 1
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 2
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 3
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 4
                      </a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div className="list-unstyled comment-list" style={sixty}>
                  <div className="media">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Meeting with HODs and boards<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Presentation on target of 2017 order and sales marketing<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media active">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label active">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          
                        />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Strategy building on worlds health and consult
                        organizations<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media active">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label active">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          
                        />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Meeting with HODs and boards<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Presentation on target of 2017 order and sales marketing<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media active">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label active">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          
                        />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Strategy building on worlds health and consult
                        organizations<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                  <div className="media">
                    {" "}
                    <span className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />
                        <i className="fa fa-check" />
                      </label>
                    </span>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">
                        Meeting with HODs and boards<small className="pull-right" />
                      </h6>
                      2:00 pm, 20 January, 2017
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                {" "}<a href="#">View all...</a>
                {" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-16 col-lg-16 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">
                  New Member <small>March 2017</small>
                </h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-outline-success btn-round">
                      <i className="fa fa-cloud-download" />
                      {" "}<span className="text"> Add</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn ">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}<a className="dropdown-item" href="#">Setting</a>
                      {" "}<a className="dropdown-item" href="#">Edit</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Close this</a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div className="list-unstyled member-list row">
                  <div className="col-lg col-sm-8 col-xs-16 ">
                    <div className="media flex-column ">
                      {" "}
                      <span className="message_userpic">
                        <img
                          className="d-flex"
                          src="../img/user-header.png"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Astha Smith</h6>
                        New Jersey, UK
                        <p className="description">
                          This is awesome product and, I am very happy
                        </p>
                      </div>
                      <div className="overlay align-items-center">
                        <button className="btn btn-success btn-round mr-2">
                          <i className="fa fa-check" />
                        </button>
                        <button className="btn btn-danger mr-2 btn-round ">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-8 col-xs-16 ">
                    <div className="media flex-column ">
                      {" "}
                      <span className="message_userpic">
                        <img
                          className="d-flex"
                          src="../img/user-header.png"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Rahul Akshay </h6>
                        New Jersey, UK
                        <p className="description">
                          This is awesome product and, I am very happy
                        </p>
                      </div>
                      <div className="overlay align-items-center">
                        <button className="btn btn-success btn-round mr-2">
                          <i className="fa fa-check" />
                        </button>
                        <button className="btn btn-danger mr-2 btn-round ">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-8 col-xs-16 ">
                    <div className="media flex-column ">
                      {" "}
                      <span className="message_userpic">
                        <img
                          className="d-flex"
                          src="../img/user-header.png"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Rocky Jolly</h6>
                        New Jersey, UK
                        <p className="description">
                          This is awesome product and, I am very happy
                        </p>
                      </div>
                      <div className="overlay align-items-center">
                        <button className="btn btn-success btn-round mr-2">
                          <i className="fa fa-check" />
                        </button>
                        <button className="btn btn-danger mr-2 btn-round ">
                          <i className="fa fa-close" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-16 col-lg-16 col-xl-8">
            <div className="card full-screen-container">
              <div className="card-header align-items-start justify-content-between flex">
                <h5 className="card-title  pull-left">
                  Recent Projects <small>February 2017</small>
                </h5>
                <ul className="nav nav-pills card-header-pills pull-right">
                  <li className="nav-item">
                    <button className="btn btn-sm btn-outline-primary btn-round">
                      <i className="fa fa-cloud-download" />
                      {" "}<span className="text">Export</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-outline-success btn-round">
                      <i className="fa fa-print" />
                      {" "}<span className="text">Print</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-link btn-round fullscreen-btn">
                      <i className="fa fa-arrows-alt" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-link btn-round"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 1
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 2
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 3
                      </a>
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-calendar mr-2" />Quarter 4
                      </a>
                      {" "}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-block">
                <div className="list-unstyled project-list row">
                  <div className="col-md-16 col-lg-8 col-xl-8">
                    <div className="media flex-column ">
                      {" "}
                      <span className="projectpic">
                        <img
                          src="../img/project_pic.jpg"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="overlay ">
                        <label className="ribbon top-right warning">
                          <span className="fa fa-user" />
                        </label>
                        <h6 className="mt-4 mb-1">Website Design</h6>
                        2017 <br />
                        <br />
                        <a
                          href="#"
                          className="btn btn-outline-white btn-round "
                        >
                          <i className="fa fa-eye" />View
                          {" "}
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-16 col-lg-8 col-xl-8">
                    <div className="media flex-column ">
                      {" "}
                      <span className="projectpic">
                        <img
                          src="../img/project_pic.jpg"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="overlay ">
                        <label className="ribbon top-right warning">
                          <span className="fa fa-star" />
                        </label>
                        <h6 className="mt-4 mb-1">Website Design</h6>
                        2017 <br />
                        <br />
                        <a
                          href="#"
                          className="btn btn-outline-white btn-round "
                        >
                          <i className="fa fa-eye" />View
                          {" "}
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-16 col-lg-8 col-xl-8">
                    <div className="media flex-column hide">
                      {" "}
                      <span className="projectpic">
                        <img
                          src="../img/project_pic.jpg"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="overlay ">
                        <label className="ribbon top-right warning">
                          <span className="fa fa-gear" />
                        </label>
                        <h6 className="mt-4 mb-1">Website Design</h6>
                        2017 <br />
                        <br />
                        <a
                          href="#"
                          className="btn btn-outline-white btn-round "
                        >
                          <i className="fa fa-eye" />View
                          {" "}
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-16 col-lg-8 col-xl-8">
                    <div className="media flex-column hide ">
                      {" "}
                      <span className="projectpic">
                        <img
                          src="../img/project_pic.jpg"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="overlay ">
                        <label className="ribbon top-right warning">
                          <span className="fa fa-gear" />
                        </label>
                        <h6 className="mt-4 mb-1">Website Design</h6>
                        2017 <br />
                        <br />
                        <a
                          href="#"
                          className="btn btn-outline-white btn-round "
                        >
                          <i className="fa fa-eye" />View
                          {" "}
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-16 col-lg-8 col-xl-8">
                    <div className="media flex-column hide">
                      {" "}
                      <span className="projectpic">
                        <img
                          src="../img/project_pic.jpg"
                          alt="Generic user image"
                        />
                        {" "}<span className="user-status bg-success " />
                      </span>
                      <div className="overlay ">
                        <label className="ribbon warni">
                          <span className="fa fa-gear" />
                        </label>
                        <h6 className="mt-4 mb-1">Website Design</h6>
                        2017 <br />
                        <br />
                        <a
                          href="#"
                          className="btn btn-outline-white btn-round "
                        >
                          <i className="fa fa-eye" />View
                          {" "}
                        </a>
                        {" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-16">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Tables <small>Datatables</small></h5>
              </div>
              <div className="card-block">
                <table className="table " id="dataTables-example">
                  <thead>
                    <tr>
                      <th>User </th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Project</th>
                      <th>status</th>
                      <th>socials</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/product1.jpg"
                          alt=""
                          className="gridpic"
                        />Strobarry milk
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">40</td>
                      <td className="center">
                        <span className="status success">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Alone Guy
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">18</td>
                      <td className="center">
                        <span className="status success">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Astha Smith
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">10</td>
                      <td className="center">
                        <span className="status success">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Lucky Sans
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">19</td>
                      <td className="center">
                        <span className="status success">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />John Doe
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">40</td>
                      <td className="center">
                        <span className="status success">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Alone Guy
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">18</td>
                      <td className="center">
                        <span className="status danger">Inactive</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Astha Smith
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">17</td>
                      <td className="center">
                        <span className="status danger">Inactive</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />John Doe
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">50</td>
                      <td className="center">
                        <span className="status danger">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Alone Guy
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">20</td>
                      <td className="center">
                        <span className="status warning">Inactive</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Astha Smith
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">15</td>
                      <td className="center">
                        <span className="status warning">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />Lucky Sans
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">15</td>
                      <td className="center">
                        <span className="status primary">Inactive</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                    <tr className="even ">
                      <td>
                        <img
                          src="../img/team.png"
                          alt=""
                          className="gridpic"
                        />John Doe
                      </td>
                      <td>info@maxartkiller.in</td>
                      <td>+91 000 000 0000</td>
                      <td className="center">50</td>
                      <td className="center">
                        <span className="status primary">Active</span>
                      </td>
                      <td className="center">
                        <a href="" className=" btn btn-link btn-sm ">
                          <i className="fa fa-facebook" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-google-plus" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-twitter" />
                        </a>
                        {" "}
                        <a href="" className="btn btn-link btn-sm">
                          <i className="fa fa-envelope" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const sixty = {
  width: 60
};

const seventy = {
  width: 70
};

const fortyfive = {
  width: 45
};

const eighty = {
  width: 80
};

export default AdminDashBorad;
