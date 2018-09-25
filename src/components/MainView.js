import React, { Component } from "react"
import NavBar from './navbar/NavBar'
import './MainView.css'
import Points from './pointsportal/Points'
import Datamanager from "../modules/Datamanager";
import Messages from "../components/messages/Messages"



export default class MainView extends Component {
    state = {
        currentUser: ''

    }

    componentDidMount (){

        this.getCurrentUser()
    }

    getCurrentUser = (e) => {
        let currentUser = JSON.parse(sessionStorage.getItem("credentials"))

        Datamanager.getAll('users').then((result) => {
            let findCurrentUser = result.find(item => {
                return currentUser.id === item.id
            })
            if (findCurrentUser) {
               let userFirstName = findCurrentUser.firstName 
               this.setState({currentUser: userFirstName})
            }
        })   
    }

    render() {
        return (
            <React.Fragment >
                <NavBar />
                <div id="mainview">
                <div id="pointsbox">
                <Points {...this.props} predictions={this.props.predictions}
                patchCorrectPrediction={this.props.patchCorrectPrediction}
                getFilteredPredictionsByUser={this.props.getFilteredPredictionsByUser}/>
                </div>
                <h3> ...Previously on Survivor!</h3>
                <h1 id="mainview-header">Welcome {this.state.currentUser},</h1>
                <Messages {...this.props}/>
                
                {/* <form id="donatebutton">
                    <input type="button" value="Donate" id="donateBtn" onClick="href='https://venmo.com/'" />
                </form> */}
                
                </div>
               
                
            </React.Fragment>
        )
    }
}