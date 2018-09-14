import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import './UserPrediction.css'



export default class UserPredictionList extends Component {

  state = {
    cast: [],
    predictions: [],
    PlacementMerge: [],
    userId: "",
    CastId: "",
    castName: "",
    PlacementPredictionId: "",
    newPM: []

  }

  componentDidMount() {
    const newPM = this.props.PlacementMerge.map(p => p)
    this.setState({ newPM })

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
    console.log(castMember)
    const newPrediction = {

      userId: this.user().id,
      CastId: castMember.id,
      PlacementPredictionId: parseInt(e.target.parentElement.parentElement.children[0].textContent),
      correctPrediction: "Null"
    }
    //filter function that loops over the placement ids and if doesnt = new prediction.pl


    this.setState({
      userId: "",
      CastId: "",
      PlacementPredictionId: "",
      correctPrediction: "Null"
    })
    this.props.addUserPrediction(newPrediction)
  }
    
    patchPrediction = () => {
    if (this.state.cast.castPlacement === this.state.PlacementPredictionId && this.state.cast.id === this.state.predictions.CastId) {
      this.props.patchCorrectPrediction(this.state.predictions.correctPrediction, "True")
    }
  }
  





  render() {



    return (
      <wrapper id="predictionListWrapper">
        <Table id="predictionTable">
          <thead>
            <tr id="predHead">
              <th className="predictionHeader">Placement</th>
              <th></th>
              <th className="predictionHeader">Cast Members</th>
              <th className="predictionHeader"></th>
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
                      <Input type="select" name="backdrop" id="castName" onChange={this.handleFieldChange}>
                        <option value="">Select a Cast Member</option>
                        {
                          this.props.cast.filter(cm => !cm.taken).map(e => <option key={e.Id} id={e.Id}>{e.castName}</option>)
                        }


                      </Input>
                    </FormGroup>
                  </td>
                  {this.state.predictions.CastId !== pm.Placement &&

                    <td>
                      <button type="submit" onClick={this.constructNewPrediction} className="submit_btn">Submit</button>
                    </td>}
                </tr>
              )}

          </tbody>
        </Table>
        <ListGroup id="predictionList">
          <th className="predictionHeader">Final Prediction</th>
          <ListGroupItem>
            {
              this.props.predictions.map(e => <p key={e.CastId} id={e.PlacementPredictionId}>{e.CastId}

                {/* {this.props.cast.find(c => c.Id === e.CastId).castName} */}
              </p>)

            }
          </ListGroupItem>

        </ListGroup>

      </wrapper>


    )
  }
}

// this.props.predictions.map(e => <p key={e.CastId} id={e.PlacementPredictionId}>{e.CastId}</p>)
// this.props.patchCastMember(castMember.id, castMember)
//     .then(() => 