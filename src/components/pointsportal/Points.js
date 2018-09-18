import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {
    Card, Button, CardTitle, CardBody
} from 'reactstrap';
import './Points.css';
import DataManager from "../../modules/Datamanager"

 
export default class Points extends Component {

    state = {
        UserScore: null

    }


     currentUser = JSON.parse(sessionStorage.getItem("credentials"))

    switchCorrectPrediction = (predictionObject) => {
        
        this.props.patchCorrectPrediction(predictionObject.id, { correctPrediction: true })
        
    };

    // switchIncorrectPrediction = (predictionObject ) => {
    //     this.props.patchCorrectPrediction(predictionObject.id, { correctPrediction: false })
    // };
    
    patchPrediction = () => {

        this.props.cast.forEach(cast => {

            // let predictionObject = this.props.cast.find(cast => {
            //     return cast.id === prediction.CastId && cast.castPlacement === prediction.PlacementPredictionId
            // })
            let predictionObject = this.props.predictions.find(prediction => {
                    return prediction.CastId === cast.id && prediction.PlacementPredictionId === cast.castPlacement
                    
                })
            console.log(predictionObject)
            if (predictionObject) { this.switchCorrectPrediction(predictionObject) } 
            
            
            // else { this.switchIncorrectPrediction(predictionObject) }
        })

        

       this.props.getFilteredPredictionsByUser(this.currentUser.id).then((correctPredictions) => {
           console.log(correctPredictions)
           if (this.currentUser !== null) {
         this.setState({UserScore: correctPredictions.length})
        console.log(this.state.UserScore)
}})
        
        // console.log(correctPredictions.length)
    
        
}




    render() {
        return (
            <React.Fragment>
                <Card id="userScoreCard">
                    <CardBody>
                        <CardTitle>{this.state.UserScore}</CardTitle>
                        <Button onClick={this.patchPrediction}>Update Score</Button>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}


