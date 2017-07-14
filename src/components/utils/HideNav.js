import React from "react";
import NavBar from '../common/Navbar'

/********** App Component *********/
class A extends React.Component{  
  componentWillMount(){
    document.getElementById('body').className='navbar-fixed'
  }
    componentWillUnmount(){
    document.getElementById('body').className=''
  }
  render(){
    return (
      <div style={{display: 'none'}}> <Navbar /> </div>
    )
  }
}


export default A;