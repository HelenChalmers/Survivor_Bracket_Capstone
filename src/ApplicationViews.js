import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import MainView from "./components/MainView"
import UserPrediction from './components/userprediction/UserPrediction';
import PredictionManager from './modules/PredictionManager'
import CastManager from './modules/CastManager'
import PMManager from './modules/PMManager'


export default class ApplicationViews extends Component {
    state = {
        cast: [],
        merge: [],
        PlacementMerge: [],
        predictions: []
    }
    

    addUserPrediction = prediction => PredictionManager.post(prediction)
        .then(() => PredictionManager.getAll())
        .then(predictions => this.setState({
            predictions: predictions
        }))

    //this grabs the arrays to pass down (PlacementMerge and Cast)
    componentDidMount() {
        CastManager.getAll().then(cast => {
            this.setState({
                cast: cast
            })
            
        }).then(
            PMManager.getAll().then(PlacementMerge => {
                this.setState({
                    PlacementMerge: PlacementMerge
                })
                
            })).then(
            PredictionManager.getAll().then(predictions => {
                this.setState({
                    predictions: predictions
                })
            }))
            
    }

    patchCastMember = (castMemberId, object) => {
        return CastManager.patch(castMemberId, object)
        .then(()=> CastManager.getAll())
        .then(cast => this.setState({cast: cast}))
    }

    patchCorrectPrediction = (predictionID, object) => {
        return PredictionManager.patch(predictionID, object).then(() => PredictionManager.getAll()).then(predictions=> this.setState({predictions: predictions}))
    }

   getFilteredPredictionsByUser = (userId) => {
       return PredictionManager.getPredictionsbyUser(userId)
   }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isAuthenticated() &&
                    <Route exact path="/mainview" render={(props) => {
                        return <MainView {...props}
                        cast={this.state.cast} 
                        predictions={this.state.predictions}
                        patchCorrectPrediction={this.patchCorrectPrediction} 
                        getFilteredPredictionsByUser={this.getFilteredPredictionsByUser}/>
                    }} />

                }
                <Route exact path="/predictions"
                    render={(props) => {
                        return <UserPrediction {...props}
                            cast={this.state.cast}
                            patchCastMember={this.patchCastMember}
                            addUserPrediction={this.addUserPrediction}
                            PlacementMerge={this.state.PlacementMerge}
                            predictions={this.state.predictions} />
                    }} />


                {
                    !this.props.isAuthenticated() &&
                    <Redirect to="/login" />
                }



            </React.Fragment>
        )
    }
}