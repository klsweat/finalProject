import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { createHistory, useBasename } from 'history';
import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
//import CourseList from "../components/CourseList";
import { AuthorizedComponent } from 'react-router-role-authorization';
import Login from "../components/login/login";
import SignUp from "../components/login/SignUp";


//Employee Components
import Lessons from "../components/Lessons";
import Courses from "../components/Courses";
import EDashboard from "../components/EDashboard";


//Admin Components
import CreateCourse from "../components/CreateCourse";
import AdminDashBorad from "../components/AdminDashBorad";
import ACourses from "../components/ACourses";
import AGradebook from "../components/AGradebook";

const admin = true; 

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} />
         <Route component={AdminDashBorad} path="/dashboard" />
         <Route component={Courses} path="/courses" />
         <Route component={AGradebook} path="/gradebook" />
         <Route component={CreateCourse} path="/createcourse" />       
         <Route component={AdminDashBorad} path="/adminDashboard" />       
         <Route component={AGradebook} path="/adminGradebook" />   
        <Route path='signup' component={SignUp} />
             
    </Route>
  </Router>
);

export default routes;





  //<Router history={browserHistory}>
  //  <Route path="/" component={Main}>
  //    <IndexRoute authorize={['employee', 'admin']} component={Home} />
  //     <Route authorize={['employee']} component={employee}>
  //       <Route component={EDashboard} path="/employee/Dashboard" />
  //       <Route component={Courses} path="/employee/courses" />
  //       <Route component={EGradbook} path="/employee/gradebook" />
  //    </Route>
  //    <Route authorize={['admin']} component={admin}>
  //      <Route component={AdminDashBorad} path="/admin/dashboard" />
  //      <Route component={ACourses} path="/admin/courses" />
  //      <Route component={CreateCourse} path="/admin/createcourse" />
  //      <Route component={AGradebook} path="/admin/gradebook" />
  //    </Route>
  //  </Route>
  //</Router>


