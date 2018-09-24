import React, { Component } from "react"
import "./Message.css"

export default class MessageEdit extends Component {

    state = {
        username:"",
        message:"",
        date: ""
}

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

editMessage = (messages, id, messageObject) => Datamanager.patch(messages, id, messageObject)
    .then(() => Datamanager.getAll(messages))
    .then(messages => this.setState({
        messages: messages
    }))

user = () => JSON.parse(sessionStorage.getItem("credentials"))

editTheMessage = evt => {
    evt.preventDefault()

        const Editmessage = {
            // username: this.user().username,
            message: this.state.message,
            date: this.state.date
            
        }
          

        this.edit(this.match.params.messageId, Editmessage).then(() => this.props.history.push("/mainview"))
        
    }

    componentDidMount() {
        const message = this.props.messages.find(m => m.id === parseInt(this.props.match.params.messageId, 0)) || {}
        this.setState(message)
    }

    render() {
        
        return (
            <React.Fragment>
                <form className="messageForm">
                    <div className="form-group">
                        <label htmlFor="NewMessage"></label>
                        <input type="text" rows="20" cols="50" 
                               className="edit-form"
                               onChange={this.handleFieldChange}
                               id="message"
                               placeholder="Edited Message" defaultValue={this.state.message} />
                               
                    </div>
                    <button type="submit" onClick={this.editTheMessage} className="btn btn-primary save-button">Save</button>
                </form>
                    </React.Fragment>
        )
    }
}

