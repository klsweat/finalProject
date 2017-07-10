import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "./utils/API";

class AGradebook extends Component {
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
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-16">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Blank</h6>
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
                  <td><img src="../img/product1.jpg" alt="" className="gridpic" />>Strobarry milk</td>
                  <td>info@maxartkiller.in</td>
                  <td>+91 000 000 0000</td>
                  <td className="center">40</td>
                  <td className="center"><span className="status success">Active</span></td>
                  <td className="center"><a href="" className=" btn btn-link btn-sm "><i className="fa fa-facebook"></i></a> <a href="" className="btn btn-link btn-sm"><i className="fa fa-google-plus"></i></a> <a href="" className="btn btn-link btn-sm"><i className="fa fa-twitter"></i></a> <a href="" className="btn btn-link btn-sm"><i className="fa fa-envelope"></i></a></td>
                </tr>
                <tr className="even ">
                  <td><img src="../img/team.png" alt="" className="gridpic" />>Alone Guy</td>
                  <td>info@maxartkiller.in</td>
                  <td>+91 000 000 0000</td>
                  <td className="center">18</td>
                  <td className="center"><span className="status success">Active</span></td>
                  <td className="center"><a href="" className=" btn btn-link btn-sm "><i className="fa fa-facebook"></i></a> <a href="" className="btn btn-link btn-sm"><i className="fa fa-google-plus"></i></a> <a href="" className="btn btn-link btn-sm" ><i className="fa fa-twitter"></i></a> <a href="" className="btn btn-link btn-sm"><i className="fa fa-envelope"></i></a></td>
                </tr>
     
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default AGradebook;
