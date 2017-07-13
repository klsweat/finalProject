import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import { createHistory, useBasename } from "history";
import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
//import CourseList from "../components/CourseList";
import { AuthorizedComponent } from "react-router-role-authorization";
import Login from "../components/login/login";
import SignUp from "../components/login/SignUp";
import QuizFrame from "../components/quizzes/QuizFrame";



//Employee Components
import Lessons from "../components/Lessons";
import Courses from "../components/Courses";
import EDashboard from "../components/EDashboard";

//Admin Components
import CreateCourse from "../components/CreateCourse";
import AdminDashBorad from "../components/AdminDashBorad";
import ACourses from "../components/ACourses";
import AGradebook from "../components/AGradebook";

import FormContainer from "../containers/builder/FormContainer";




const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
       <IndexRoute components={EDashboard} />
      
      <Route component={AdminDashBorad} path="/dashboard" />
      <Route component={Courses} path="/courses" />
      <Route component={Courses} path="/courses/parent" />
      <Route component={AGradebook} path="/gradebook" />
      <Route component={Courses} path="/lessons" />
      <Route path="signup" component={SignUp} />

     <Route component={QuizFrame} path="/create_quiz" />
     <Route component={FormContainer} path="/FormContainer" />

      <Route component={CreateCourse} path="/manage/createcourse" />
      <Route component={AdminDashBorad} path="/manage/adminDashboard" />
      <Route component={AGradebook} path="/manage/adminGradebook" />
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
