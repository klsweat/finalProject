import React, { Component } from "react";

class TestForms extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

 
  render() {

    return (
     <form className="container-fluid p-0">
                <div className="row setup-content" id="step-1">
                  <div className="col-sm-16">
                    <div className="row">
                      <div className="col-sm-16 text-center">
                        <h3 className=" mb-2"> Step 1</h3>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-16 col-md-8 col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">First Name</label>
                          <input  maxlength="100" type="text" required className="form-control" placeholder="Enter First Name" autofocus  />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Last Name</label>
                          <input maxlength="100" type="text" required className="form-control" placeholder="Enter Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="wizard-footer">
                      <div className="col-sm-16 ">
                        <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row setup-content" id="step-2">
                  <div className="col-sm-16">
                    <div className="row">
                      <div className="col-sm-16 text-center">
                        <h3 className=" mb-2"> Step 2</h3>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-16 col-md-8 col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Company Name</label>
                          <input maxlength="200" type="text" required className="form-control" placeholder="Enter Company Name" />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Company Address</label>
                          <input maxlength="200" type="text" required className="form-control" placeholder="Enter Company Address"  />
                        </div>
                      </div>
                    </div>
                    <div className="wizard-footer">
                      <div className="col-sm-16  text-center">
                        <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row setup-content" id="step-3">
                  <div className="col-sm-16">
                    <div className="row">
                      <div className="col-sm-16">
                        <h3 className=" mb-2"> Step 3</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-16">
                        <div className="alert alert-success" role="alert">
                          <h4 className="alert-heading">Well done!</h4>
                          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="wizard-footer">
                      <div className="col-sm-16 ">
                        <button className="btn btn-success btn-lg pull-right" type="submit">Finish!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
    );
  }
}

export default TestForms;
