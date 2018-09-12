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
    
    componentDidMount(){
        CastManager.getAll().then(cast => {
            this.setState({
                cast: cast
            })
        }),
        PMManager.getAll().then(PlacementMerge => {
            this.setState({
                PlacementMerge: PlacementMerge
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                 {
                     this.props.isAuthenticated() &&
                     <Route exact path="/mainview" render={(props) => {
                        return <MainView {...props}/>
                     }}/>
                     
                 } 
                 <Route exact path="/predictions"  
                 render={(props) => {
                    return <UserPrediction {...props}
                    cast={this.state.cast}
                    addUserPrediction={this.addUserPrediction}
                    PlacementMerge={this.state.PlacementMerge}/>
                 }}/>
                 
                 
                 {
                     !this.props.isAuthenticated() &&
                     <Redirect to="/login" />
                 }  
            
            
                 
            </React.Fragment>   
        )
    }
}