import React, { Component } from "react";
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import SidebarRight from './common/SidebarRight'
import Main from './Main'
import { Route, IndexRoute, Router, browserHistory } from "react-router";
//import { AuthorizedComponent } from 'react-router-role-authorization';
//import Cookies from 'js-cookie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isAdmin: true,
      isUser: false
    };
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
   // if (this.state.isLogin) {
   //   browserHistory.push("/login");
   //   console.log("is not login");
   // }

    if(this.state.isLogin){
     browserHistory.push('/Dashbaord');
    } else {
    browserHistory.push('/login');
    }
  }

  render() {
    return (
    <div>
    

  </div>
    );
  }
}

export default Home;
