import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {
    Card, Button, CardTitle, CardBody
} from 'reactstrap';
import './Points.css';
import DataManager from "../../modules/Datamanager"

export default class Points extends Component {

    


    switchCorrectPrediction = (predictionObject) => {
        this.props.patchCorrectPrediction(predictionObject.id, {correctPrediction: true})
      }
    
      switchIncorrectPrediction = (predictionObject) => {
         this.props.patchCorrectPrediction(predictionObject.id, {correctPrediction: false})
      }
    
      patchPrediction = () => {
    this.props.predictions.forEach(prediction => {
        
        let predictionObject = this.props.cast.find(cast => {
          return cast.id === prediction.CastId && cast.castPlacement === prediction.PlacementPredictionId
        })
        if (predictionObject) { this.switchCorrectPrediction(predictionObject) } else {this.switchIncorrectPrediction(predictionObject) }
    });
        
      }




render() {
    return (
        <React.Fragment>
            <Card id="userScoreCard">
                <CardBody>
                    <CardTitle>User's Score</CardTitle>
                    <Button onClick={this.patchPrediction}>Update Score</Button>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}
}


