import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import './UserPrediction.css'
import UserPredictionCard from './UserPredictionCard';
import Datamanager from '../../modules/Datamanager'
import PredictionManager from '../../modules/PredictionManager'





export default class UserPredictionList extends Component {

  state = {
    cast: [],
    PlacementMerge: [],
    userId: "",
    CastId: "",
    castName: "",
    PlacementPredictionId: "",
    correctPrediction: false,
    newPM: []


  }

  componentDidMount() {
  
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

    const newPrediction = {

      userId: this.user().id,
      CastId: castMember.id,
      PlacementPredictionId: parseInt(e.target.parentElement.parentElement.children[0].textContent),
      correctPrediction: null
    }

    this.props.addUserPrediction(newPrediction)
  
    this.setState({
      userId: "",
      CastId: "",
      PlacementPredictionId: "",
      correctPrediction: ""
    })
  
  }




//   getCurrentUser = (e) => {
//     let currentUser = JSON.parse(sessionStorage.getItem("credentials"))

//     Datamanager.getAll('predictions').then((result) => {
//         let attachCurrentUser = result.find(item => {
//             return currentUser.id === item.userId
//         })
//         if (attachCurrentUser) {
//           this.props.predictions.map(e => <p key={e.CastId} id={e.PlacementPredictionId}>
//             {this.props.cast.find(c => c.id === e.CastId).castName}
//             </p>)
//         }
//     })   
// }



  render() {



    return (
      <wrapper id="predictionListWrapper">
      <div id="predictionTable">
        <Table>
          <thead>
            <tr id="predHead">
              <th className="predictionHeader">Placement</th>
              <th className="predictionHeader">Make Your Prediction</th>
              <th className="predictionHeader"></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.PlacementMerge.map(pm =>
                <tr>
                  <th scope="row">{pm.Placement}</th>
                  <td><UserPredictionCard {...this.props} 
                  placement={pm.Placement}
                  cast={this.props.cast}
                  /></td>
                </tr>
              )}

          </tbody>
        </Table>
        </div>
        <ListGroup id="predictionList">
          <th className="predictionHeader">Final Prediction</th>
          <ListGroupItem>
            {
              
              this.props.UserPredictions.map(e => <p key={e.CastId} id={e.PlacementPredictionId}>
                {this.props.cast.find(c => c.id === e.CastId).castName}
                
              </p>)

            }
          </ListGroupItem>
        </ListGroup>

      </wrapper>


    )
  }
}

