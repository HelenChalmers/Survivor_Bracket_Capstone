import React, { Component } from 'react'
import './Messages.css'
import Datamanager from '../../modules/Datamanager';
import {
Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class MessageList extends Component {

    state = {
        messages:[],
        currentUser: '',
    }

    //Function that makes the edit feature UserSpecific that then is called in the return where the button goes on the page.
    editUserSpecific = function(message){
        if(message.currentUser === this.state.currentUser){
            return <div>
                 <Button type="button"
                                className="btn btn-success"
                            onClick={() =>  this.props.history.push(`/messages-edit/${message.id}`)}
                            className="card-link">Edit</Button>
                                       
                                        
            </div>
        }
    }


    
    componentDidMount() {

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
        
        Datamanager.getAll('messages', 'messages')
          .then(messages => {
            this.setState({ messages: messages });
          })    
    }

    render () {
        return (
            <React.Fragment>
               <h2 id="messageHeader">Messages</h2>
            <section className="messages">
            
            {
                this.state.messages.map(message =>
                    <div key={message.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                            <div className="message-card">
                                <h3><span className="newMessage">{message.message}</span></h3>
                                <h4 className="message-username">{message.currentUser}</h4>
                                <h6 className="message-Date">{Date()}</h6>
                                </div>
                                {this.editUserSpecific(message)}
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            
            </React.Fragment>
        )
    }



}

