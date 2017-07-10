import React, { Component } from 'react'
import API from '../utils/API'
import { Link } from 'react-router'

class login extends Component {
  constructor () {
    super()
    this.state = {
      authenticated: false,
      email: "",
      password: "",
      isAdmin: false
    }
    this.signInFunction = this.signInFunction.bind(this);
    this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
    this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);

  }
  // Getting all quotes when the component mounts
  componentDidMount () {}

  handleInputEmailChange(event) {
    this.setState({ 
      email: event.target.value
    });
  }

  signInFunction () {
    console.log('signing in')
    const newUserLogin = {
      email: this.state.email,
      password: this.state.password
    }
    API.signIn(newUserLogin).then((res) => {
      this.setState({authenticated: true})
      console.log(res)
    })
  }

    handleInputPasswordChange(event) {
    this.setState({ 
      password: event.target.value
    });
  }



  render () {
    return (
      <div>
        <header className='navbar-fixed'>
          <nav className='navbar navbar-toggleable-md sign-in-header'>
            <div className='sidebar-left'>
            </div>
            <div className='col' />
            <div className='sidebar-right pull-right'>
              <ul className='navbar-nav  justify-content-end'>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className='wrapper-content-sign-in '>
          <div className='container text-center'>
            <form className='form-signin1 smallbox'>
              <h2 className='tex-black mb-4'>Sign in</h2>
              <label className='sr-only'>
                Email address
              </label>
              <input type='text' className='form-control' placeholder='Email address' value={this.state.email} onChange={this.handleInputEmailChange}
/>
              <br />
              <label className='sr-only'>
                Password
              </label>
              <input type='password' className='form-control' placeholder='Paassword' onChange={this.handleInputPasswordChange}
                    value={this.state.password}/>
              <br />
              <div className='checkbox'>
                <label className='form-check-label active text-white'>
                  <input type='checkbox' className='form-check-input' />
                  <i className='fa fa-check' />
                </label>
                Remember me
                {" "}
              </div>
              <button onClick={this.signInFunction()} className='btn btn-lg btn-primary btn-round'>
                Sign in
              </button>
              <br />
            </form>
          </div>
      
        </div>
      </div>
    )
  }
}

export default login
