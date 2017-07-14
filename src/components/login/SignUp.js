import React, { Component } from "react";
import API from "../utils/API";
 
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
   handleInputChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleButtonClick() {
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        const newLogin = {
            email: this.state.email,
            password: this.state.password
        }
        API.signUp(newUser).then((res) => {
            console.log(res.data);
        });
        API.signUP(newLogin).then((res) => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col m6 s12 offset-m3">
                        <div className="row">
                            <h5 className="blueHeader z-depth-3">Sign Up</h5>
                        </div>
                        <div className="row" id="signup_border">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label><br />
                                <input type="text" value={this.state.first_name} name="first_name" onChange={this.handleInputChange} />
                                <label htmlFor="last_name">Last Name</label><br />
                                <input type="text" value={this.state.last_name} name="last_name" onChange={this.handleInputChange} />
                                <label htmlFor="email">Email</label><br />
                                <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} />
                                <label htmlFor="password">Password</label><br />
                                <input type="text" value={this.state.password} name="password" onChange={this.handleInputChange} />
                                <button
                                    onClick={this.handleButtonClick}
                                    className="btn btn-success light-blue accent-2 btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;