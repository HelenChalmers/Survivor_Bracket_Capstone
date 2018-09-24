import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MessageForm from "./MessageForm"
import MessageList from './MessageList'

export default class UserPrediction extends Component {

    

    render() {
        return (
            <React.Fragment>
                <MessageList />
                <MessageForm />        
            </React.Fragment>
        )
    }
}