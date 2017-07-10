import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "./utils/API";
//import { AuthorizedComponent } from 'react-router-role-authorization';
//import Cookies from 'js-cookie';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      
    };

   // this.allowedRoles = ['admin'];
   // this.userRoles = Cookies.get('user').roles;

    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    //this.getQuotes = this.getQuotes.bind(this);
    //this.renderLogin = this.renderLogin.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
   // this.renderLogin();
    //this.getQuotes();
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
              <div className="row">
              </div>
              <div className="row">
                <hr />
              </div>

            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Home;
