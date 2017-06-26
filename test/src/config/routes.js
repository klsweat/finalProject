import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import CreateCourse from "../components/CreateCourse";
import Courses from "../components/Courses";
//import CourseList from "../components/CourseList";
import Lessons from "../components/Lessons";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="favorites" component={Favorites} />
    <Route path="createcourse" component={CreateCourse} />
    <Route path="courses" component={Courses} />
    <Route path="lessons" component={Lessons} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
