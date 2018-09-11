import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager"

export default class Register extends Component {

    render() {
        return (
            <div id="registerForm">
    <form onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label htmlFor="inputFirstName">
                        First Name
                    </label>
                    <input onChange={this.handleFieldChange} type="first name"
                        id="first_name"
                        placeholder="First Name"
                        required="" autoFocus="" /><br />
                        <label htmlFor="inputLastName">
                        Last Name
                    </label>
                    <input onChange={this.handleFieldChange} type="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required="" autoFocus="" /><br />
                    <label htmlFor="inputEmail">
                        Email address
                    </label>
                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" /><br />
                    <label htmlFor="inputPassword">
                        Password
                    </label>
                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" /><br />
                    <label htmlFor="rememberMe">
                        Remember Me
                    </label>
                    <input type="checkbox" name="RememberMe" value="Remember" onClick={this.changeRememberMe}/>
                    <button type="submit" onClick={(e) => this.registerUser(e)}>
                        Register
                    </button>
                    <button type="submit" onClick={this.handleLogin}>
                        Login
                    </button>
                    </form>
                </div>    
        )
    }
}