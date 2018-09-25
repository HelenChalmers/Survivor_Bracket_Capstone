import React, { Component } from 'react'
import {Link} from "react-router-dom"
import UserPredictionList from './UserPredictionList'
import PredictionNavBar from './PredictionNavBar'

export default class UserPrediction extends Component {

    

    render() {
        return (
            <React.Fragment>
                <PredictionNavBar />
                <UserPredictionList {...this.props} addUserPrediction={this.props.addUserPrediction} patchCorrectPrediction={this.props.patchCorrectPrediction}/>                
            </React.Fragment>
        )
    }
}

