import React from "react";
import API from "./utils/API";
import { bindAll } from "lodash";
import $ from "jquery";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import draftToHtml from 'draftjs-to-html';


const Fields = {};
const onEditorStateChange = {};

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
    xhr.open("POST", "api/file");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    const data = new FormData(); // eslint-disable-line no-undef
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

Fields["TextArea"] = ({
  field,
  value,
  handleChange,
  editorState,
  onEditorStateChange
}) =>
  <div>
    <strong>{field.hl}</strong>
    <br />

    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      className="form-control"
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        image: { uploadCallback: uploadImageCallBack }
      }}
    />
    <div>
      <textarea
        readOnly
        className="rdw-storybook-textarea"
        id={field.slug}
        onChange={handleChange}
        value={draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>

  </div>;

Fields["Input"] = ({ field, value, handleChange }) =>
  <div>
    <strong>{field.hl}</strong>
    <input
      className="form-control"
      id={field.slug}
      value={value}
      onChange={handleChange}
    />
  </div>;

Fields["File"] = ({ field, value, handleChange }) =>
  <div>
    <strong>{field.hl}</strong>
    <input
      className="form-control"
      type="file"
      id={field.slug}
      value={value}
      onChange={handleChange}
    />
  </div>;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      values: {},
      file: {},
      imagePreviewUrl: "",
      data_uri: null,
      id: "",
      type: "",
      editorState: EditorState.createEmpty()
    };
    console.log(this.state.editorState);

    if (typeof props.values !== "undefined") {
      // alert(JSON.stringify(props.values))
      this.state.values = props.values;
    }
  }

  handleChange(e) {
    let v = this.state.values;
    v[e.target.id] = e.target.value;
    this.setState(v);

    console.log(e.target.type);

    if (e.target.type == "file") {
      let reader = new FileReader();
      let file = e.target.files[0];
      // console.log("file ", file)

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      //console.log('reader', reader)
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  save() {
    let newFile = this.state;

    //console.log('newFile', newFile)
    if (File.name === "File") {
      // console.log("this file is not empty")
      let v = this.state.values;
      v["src"] = this.state.imagePreviewUrl;
      // this.setState(v)
      API.saveFile(newFile).then(res => {
        v["listid"] = res.data._id;
        this.setState(v);
      });
    }
    console.log(this.state.values);

    // console.log("values", this.state.values)
    this.props.save(this.state.values);
    this.toggle();
  }

  cancel() {
    this.setState({ values: this.props.values });
    this.toggle();
  }

  toggle() {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }

  onEditorStateChange(editorState) {
    console.log("editorstate", editorState);
      let v = this.state.values;
      v["text"] = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    this.setState({
      editorState: editorState,
      values: v
    });
    console.log(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));
  }

  render() {
    const { editorState } = this.state;

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    }

    return (
      <span>
        <i
          onClick={this.toggle.bind(this)}
          className="fa fa-pencil"
          aria-hidden="true"
        />
        {" "}
        <div
          id={"form" + this.props.id}
          encType="multipart/form-data"
          className="d-modal-bg"
          style={
            this.state.visible
              ? { display: "block", opacity: 1 }
              : { display: "none" }
          }
        >
          {" "}
          <div className="d-modal-content">
            {" "}
            <h3>
              <i className="fa fa-cubes green" aria-hidden="true" /> Edit
              Content
            </h3>
            {" "}<br />
            {" "}
            {this.props.fields.map(field => {
              let Field = Fields[field.type];
              //console.log(this.state.editorState);
              return Field({
                field,
                value: this.state.values[field.slug],
                handleChange: this.handleChange.bind(this),
                editorState: this.state.editorState,
                onEditorStateChange: this.onEditorStateChange.bind(this)
              });
            })}

            <div id="imagePreview">
              {$imagePreview}
            </div>

            <button
              type="button"
              style={{ float: "right" }}
              className="btn btn-success"
              key={this.state.id}
              onClick={this.save.bind(this)}
            >
              {" "}Save
              {" "}
            </button>
            <button
              type="button"
              style={{ float: "right", marginRight: "10px" }}
              className="btn btn-default"
              onClick={this.cancel.bind(this)}
            >
              {" "}Cancel
              {" "}
            </button>
            {" "}
          </div>
        </div>
      </span>
    );
  }
}
