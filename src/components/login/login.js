import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager"





export default class Login extends Component {

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" /><br />
                <label htmlFor="inputUsername">
                    Username
                </label>
                <input onChange={this.handleFieldChange} type="username"
                       id="username"
                       placeholder="Username"
                       required="" /><br />
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
        )
    }
}


