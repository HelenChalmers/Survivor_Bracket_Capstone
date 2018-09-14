import React, { Component } from "react"
import NavBar from './navbar/NavBar'
import './MainView.css'
import Points from './pointsportal/Points'


export default class MainView extends Component {


    render() {
        return (
            <React.Fragment>
                <NavBar />
                {/* <Points {...props}/> */}
                <h1>Welcome HELEN</h1>
                <form>
                    <input type="button" value="Donate" id="donateBtn" onclick="window.location.href='https://venmo.com/'" />
                </form>
                
                
            </React.Fragment>
        )
    }
}