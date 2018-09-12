import React, { Component } from "react"
import DataManager from "../../modules/DataManager"

export default class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    registerNewUser = (e) => {

        e.preventDefault()

        let newUser = {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            bio: "Add a bio",
            birthday: "Add your birthday",
            points: 0

        }
   

    DataManager.getAll("users").then((result) => {
        let userEmail = result.find(item => {
            return newUser.email === item.email
        })
        let userPassword = result.find(item => {
            return newUser.password === item.password
        })
        if (userEmail && userPassword) {
            alert("I've got nothing for you. You are already registered")
        } else {
            //Post to API
            DataManager.post("users", newUser).then(() => {
                alert("The Tribe has spoken. You are in the game.")
                //Clear the Form Fields
                //Put HTML Representation on the DOM
            })
        }
    })
}


    render() {
        return (
            <div id="registerForm">
                <form onSubmit={this.registerNewUser}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                    <label htmlFor="inputFirstName">
                        First Name
                    </label>
                    <input onChange={this.handleFieldChange} type="first name"
                        id="firstName"
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
                    {/* <label htmlFor="rememberMe">
                        Remember Me
                    </label>
                    <input type="checkbox" name="RememberMe" value="Remember" onClick={this.changeRememberMe}/> */}
                    <button id="registerbtn" type="submit" onClick={this.registerNewUser}>
                        Register
                    </button>
                    <button id="loginbtn" type="submit" onClick={() => {this.props.switchLogin()}}>
                        Login
                    </button>
                </form>
            </div>    
        )
    }
}