import React, { Component } from "react"
import Datamanager from "../../modules/Datamanager"
import './Login.css'






export default class Login extends Component {

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    

    
    // componentDidMount(){
    //     let obj = {id: 1, name: "helen", joke: "Dejan"}
    //     sessionStorage.setItem("user", JSON.stringify(obj))
    // }

    render() {
        return (
    <div id="loginForm">
    <form onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
                    <label htmlFor="inputEmail">
                    Email
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

