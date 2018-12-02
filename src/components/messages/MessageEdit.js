import React, { Component } from "react"
import "./Messages.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button } from 'reactstrap';


export default class MessageEdit extends Component {

    state = {
        username:"",
        message: "",
        date: "",
        id: ""
}

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}



user = () => JSON.parse(sessionStorage.getItem("credentials"))

editTheMessage = evt => {
    evt.preventDefault()
    
        const Editmessage = {
            
            message: this.state.message,
            
            
        }
          
        
        this.props.editMessage(this.props.match.params.messageId, Editmessage).then(() => this.props.history.push("/"))
        
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
                    <Button type="submit" onClick={(evt) => this.editTheMessage(evt)} className="btn btn-primary save-button">Save</Button>
                </form>
                    </React.Fragment>
        )
    }
}

