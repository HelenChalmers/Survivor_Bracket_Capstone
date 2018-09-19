import React, { Component } from "react"
import DataManager from "../../modules/Datamanager"
import './Login.css'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



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
            
        }
   

    DataManager.getAll("users").then((result) => {
        //checks to see if the user is already registered.
        let userEmail = result.find(item => {
            return newUser.email === item.email
        })
        let userPassword = result.find(item => {
            return newUser.password === item.password
        })
        if (userEmail && userPassword) {
            alert("I've got nothing for you. You are already registered")
        } else {
            
            DataManager.post("users", newUser).then(() => {
                alert("The Tribe has spoken. You are in the game.")
               
            })
        }
    })
    this.props.switchLogin();
}


    render() {
        return (
            <div id="registerWrapper">
            <div id="registerForm">
                <form onSubmit={this.registerNewUser}>
                    <h1 className="h3 mb-3 font-weight-normal" id="registerheader">Please Register</h1>
                    <label htmlFor="inputFirstName">
                       
                    </label>
                    <Input onChange={this.handleFieldChange} type="first name"
                        id="firstName"
                        placeholder="First Name"
                        required="" autoFocus="" /><br />
                        <label htmlFor="inputLastName">
                        
                    </label>
                    <Input onChange={this.handleFieldChange} type="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required="" autoFocus="" /><br />
                    <label htmlFor="inputEmail">
                        
                    </label>
                    <Input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" /><br />
                    <label htmlFor="inputPassword">
                        
                    </label>
                    <Input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" /><br />
                    
                    <button id="registerbtn" type="submit" onClick={this.registerNewUser}>
                        Register
                    </button>
                    
                </form>
            </div>
            </div>    
        )

    }
}

{/* <button id="loginbtn" type="submit" onClick={() => {this.props.switchLogin()}}>
                        Login
                    </button> */}