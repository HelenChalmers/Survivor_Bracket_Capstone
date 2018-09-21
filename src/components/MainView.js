import React, { Component } from "react"
import NavBar from './navbar/NavBar'
import './MainView.css'
import Points from './pointsportal/Points'



export default class MainView extends Component {

    componentDidMount (){
        console.log(this.props)
    }

    // DataManager.getAll("users").then

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
                <h1 id="mainview-header">Welcome!</h1>
                
                <form id="donatebutton">
                    <input type="button" value="Donate" id="donateBtn" onClick="href='https://venmo.com/'" />
                </form>
                
                </div>
               
                
            </React.Fragment>
        )
    }
}