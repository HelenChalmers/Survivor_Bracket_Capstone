import React, { Component } from 'react'
import {Link} from "react-router-dom"
import UserPredictionList from './UserPredictionList'

export default class UserPrediction extends Component {

    

    render() {
        return (
            <React.Fragment>
                <UserPredictionList {...this.props} addUserPrediction={this.props.addUserPrediction}/>                
            </React.Fragment>
        )
    }
}

