import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import MainView from "./components/MainView"


export default class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                 {
                     this.props.isAuthenticated() &&
                     <Route exact path="/mainview" render={(props) => {
                        return <MainView {...props}/>
                     }}/>
                 } 
                 {
                     !this.props.isAuthenticated() &&
                     <Redirect to="/login" />
                 }  
            </React.Fragment>   
        )
    }
}