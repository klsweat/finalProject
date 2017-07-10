import React from 'react';
import ReactDOM from 'react-dom';
import routes from "../src/config/routes";


import {Editor, Content} from '../src/index';

ReactDOM.render(routes, document.getElementById("content"));


/*

import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, Content} from 'react-content-builder';

let save = (c)=>{
  alert(
    "This can be saved in the backend (e.g. via REST): "+ JSON.stringify(c)
  );
}

ReactDOM.render(
  <Editor content={content} save={save} />,
  document.getElementById("content")
);

*/
