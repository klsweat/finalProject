// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import DemoBar from './demobar';
import FormBuilder from "./components/src/index";
import * as variables from './variables';

ReactDOM.render(routes, document.getElementById("app"));

// Add our stylesheets for the demo.
require('./css/application.css.scss');

ReactDOM.render(
  <FormBuilder.ReactFormBuilder variables={variables} />,
  document.getElementById('form-builder')
)

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar')
)