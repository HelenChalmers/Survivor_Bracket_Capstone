import React, { Component } from "react"
import DataManager from "../../modules/Datamanager"
import './Login.css'
import Register from "./Register";






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
            // } else if (this.state.remember) {
            //     localStorage.setItem(
            //         "credentials",
            //         JSON.stringify({
            //             email: this.state.email,
            //             password: this.state.password,
            //             id: userObject.id
            //         })
            //     )
                // this.props.history.push("/mainview")
                
            } else { 
        /*
            Store the email and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                id: userObject.id
            })
        )
        this.props.history.push("/mainview")
        
    }
})
}

// changeRememberMe = () => {

//     if (this.state.remember) {
//         this.setState({remember : false})
//     } else {
//         this.setState({remember : true})
//     }
// }
    


    render() {
        return (
            <React.Fragment>
                {
                    this.state.registerClicked &&
                    <Register switchLogin={this.switchLogin} />
                }
                {
                    !this.state.registerClicked &&
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
                            {/* <label htmlFor="rememberMe">
                                Remember Me
                            </label> */}
                            {/* <input type="checkbox" name="RememberMe" value="Remember" onClick={this.changeRememberMe}/> */}
                            <button type="submit" onClick={this.switchRegister}>
                                Register
                            </button>
                            <button type="submit" onClick={this.handleLogin}>
                                Login
                            </button>
                        </form>
                    </div>
                }
            </React.Fragment>
            
            
        )
    }
}

