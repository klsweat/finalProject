import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import CreateCourse from "../components/CreateCourse";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="favorites" component={Favorites} />
    <Route path="createcourse" component={CreateCourse} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
