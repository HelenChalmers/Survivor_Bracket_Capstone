import React, { Component } from "react"
import NavBar from './navbar/NavBar'
import './MainView.css'


export default class MainView extends Component {


    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h1>Welcome HELEN</h1>
                <form>
                    <input type="button" value="Donate" id="donateBtn" onclick="window.location.href='https://venmo.com/'" />
                </form>
                
                
            </React.Fragment>
        )
    }
}