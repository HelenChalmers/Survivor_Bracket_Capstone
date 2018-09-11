import React, { Component } from "react"
import NavBar from './navbar/NavBar'

export default class MainView extends Component {


    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h1>ELLO HELEN</h1>
            </React.Fragment>
        )
    }
}