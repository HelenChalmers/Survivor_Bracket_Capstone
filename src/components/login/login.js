import React, { Component } from "react"
import DataManager from "../../modules/Datamanager"
import './Login.css'
import Register from "./Register";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'







export default class Login extends Component {

    state = {
        email: "",
        password: "",
        registerClicked: false
    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    switchRegister = () => {
        this.setState({registerClicked: true})
    }
    
    switchLogin = () => {
        this.setState({registerClicked: false})
    }

    handleLogin = (e) => {


        e.preventDefault()

        let existingUser = {
            
            email: this.state.email,
            password: this.state.password

        }

        DataManager.getAll("users").then((result) => {
            let userObject = result.find(item => {
                return existingUser.email === item.email && existingUser.password === item.password
            })
            if (!userObject) {
                alert("You've gotta dig deep, your info is incorrect")
                
            } else { 
        /*
            Store the email and password that
            the user enters into session storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({

                
                email: this.state.email,
                password: this.state.password,
                id: userObject.id
            })
        )
        this.props.history.push("/")
        
    }
})
}

    render() {
        return (
            <React.Fragment>
                {
                    this.state.registerClicked &&
                    <Register switchLogin={this.switchLogin} />
                }
                {
                    !this.state.registerClicked &&
                    <div id="loginWrapper">
                    <div id="loginForm">
                        <form onSubmit={this.handleLogin}>
                            <h1 className="h3 mb-3 font-weight-normal" id="loginheader">Please Log In! New Player? Please Register</h1>
                            <label htmlFor="inputEmail">
                            
                            </label><br />
                            <Input onChange={this.handleFieldChange} type="email"
                                id="email"
                                placeholder="Email address"
                                required="" autoFocus="" /><br /><br />
                            <label htmlFor="inputPassword">
                                
                            </label>
                            <Input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required="" /><br /><br />
                            
                            <button type="submit" className="loginbuttons" onClick={this.handleLogin}>
                                Login
                            </button>
                            <button type="submit" 
                            className="loginbuttons"onClick={this.switchRegister}>
                                Register
                            </button>
                        </form>
                    </div>
                    </div>
                }
            </React.Fragment>
            
            
        )
    }
}

