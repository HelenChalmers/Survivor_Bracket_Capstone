import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MessageForm from "./MessageForm"

export default class UserPrediction extends Component {

    

    render() {
        return (
            <React.Fragment>
                <MessageForm />                
            </React.Fragment>
        )
    }
}