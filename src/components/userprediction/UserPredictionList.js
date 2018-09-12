import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import './UserPrediction.css'



export default class UserPredictionList extends Component {

  state = {
    cast: [],
    predictions: []

  }
    

    render() {

            
        

        return (
<wrapper id="predictionListWrapper">
<Table id="predictionTable">
        <thead>
          <tr id="predHead">
            <th class="predictionHeader">Placement</th>
            <th></th>
            <th class="predictionHeader">Cast Members</th>
            <th class="predictionHeader">Username</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.PlacementMerge.map(pm =>
          <tr>
            <th scope="row">{pm.Placement}</th>
            <td></td>
            <td>
            <FormGroup>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
            
            
                            <option value="">Select a Cast Member</option>
                        {
                            this.props.cast.map(e => <option key={e.id} id={e.id}>{e.castName}</option>)
                        }
                        
              
            </Input>
          </FormGroup>
            </td>
            <td><button class="submit_btn">Submit</button></td>
          </tr>
            )}
          </tbody>
          </Table>


    </wrapper>


        )
}
}