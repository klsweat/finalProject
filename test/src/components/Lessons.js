import React from 'react'
import { Editor } from 'react-draft-wysiwyg';

class Lessons extends React.Component {


  render() {

    return (

  <div>
      <div className="row  align-items-center justify-content-between">
        <div className="col-11 col-sm-12 page-title">
          <h3>Create Course</h3>
          <p>Creatively crafted Dashboard for your needs</p>
        </div>
      <div className="col text-right ">
        <div className="btn-group pull-right">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-16">
        <div className="card">
          <div className="card-header">
            <h6 className="card-title">Blank</h6>
          </div>
          <div className="card-block">
            <Editor
              wrapperClassName="wrapper-class" 
              editorClassName="editor-class" 
              toolbarClassName="toolbar-class" 

            />   
            </div>
        </div>
      </div>
  </div>
  </div>
    );
  }
}

export default Lessons
