import React, { Component } from "react"
import "./Messages.css"
import Datamanager from "../../modules/Datamanager"

export default class MessageForm extends Component {
    state = {
        currentUser: "",
        message: ""
    }

    addMessage = message => Datamanager.post('messages', message)
    .then(() => Datamanager.getAll(this.user().id))
    .then(messages => this.setState({
        messages: messages
    }))

    handleFieldChange = evt => {
       
        this.setState({message: evt.target.value, date: Date.now()})
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

    constructNewMessage = evt => {

        const newMessage = {
            currentUser: this.state.currentUser,
            message: this.state.message,
            date: this.state.date
        }
            this.setState({
                currentUser: "",
                message: ""
            })

        this.addMessage(newMessage).then(()=> this.props.history.push("/mainview"))
        
    }

    render() {
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="NewMessage"></label>
                        <textarea rows="5" cols="45" 
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="addMessage"
                               placeholder="Smack Talking Only"></textarea>
                    </div>
                    <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary save-button">Send</button>
                </form>
            </React.Fragment>
        )
    }
}

