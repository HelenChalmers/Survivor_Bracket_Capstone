import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import MainView from "./components/MainView"
import UserPrediction from './components/userprediction/UserPrediction';



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
                 <Route path="/predictions" component={UserPrediction} />
                 
                 {
                     !this.props.isAuthenticated() &&
                     <Redirect to="/login" />
                 }  
            
            
                 
            </React.Fragment>   
        )
    }
}