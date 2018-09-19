import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import './UserPrediction.css'


export default class UserPredictionCard extends Component {

    state = {
        cast: [],
        predictions: [],
        PlacementMerge: [],
        userId: "",
        CastId: "",
        castName: null,
        PlacementPredictionId: "",
        correctPrediction: false,
        newPM: [], 
         disabled: false 

    
      }
    
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }

      user = () => JSON.parse(sessionStorage.getItem("credentials"))



  constructNewPrediction = (e) => {
    let castMember = this.props.cast.find(c => c.castName === this.state.castName)
    castMember.taken = true
    
    console.log(e.target.className)
    const newPrediction = {
      userId: this.user().id,
      CastId: castMember.id,
      PlacementPredictionId: this.props.placement,
      correctPrediction: null
    }

    this.props.addUserPrediction(newPrediction)
  
    this.setState({
      userId: "",
      CastId: "",
      PlacementPredictionId: "",
      correctPrediction: "",
      castName: null,
      disabled: !this.state.disabled
    })
}
    

    render() {

        return (

            <React.Fragment>
            <FormGroup>
                      <Input type="select" name="backdrop" id="castName" disabled = {(this.state.disabled)? "disabled" : ""}
                       onChange={this.handleFieldChange}>
                        <option value="">Select a Cast Member</option>
                        {
                          this.props.cast.filter(cm => !cm.taken).map(e => <option key={e.Id} id={e.Id}>{e.castName}</option>)
                        }

                      </Input>
                    </FormGroup>
                  
              
               {this.state.castName !== null &&  

                    <td>
                      <button type="submit" onClick={this.constructNewPrediction} className="submit_btn">Submit</button>
                    </td>}
                    </React.Fragment>
              
        )

    }
}