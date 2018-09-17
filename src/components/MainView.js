import React, { Component } from "react"
import NavBar from './navbar/NavBar'
import './MainView.css'
import Points from './pointsportal/Points'


export default class MainView extends Component {

    componentDidMount (){
        console.log(this.props)
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Points {...this.props} predictions={this.props.predictions}
                patchCorrectPrediction={this.props.patchCorrectPrediction}/>
                <h1>Welcome HELEN</h1>
                <form>
                    <input type="button" value="Donate" id="donateBtn" onClick="window.location.href='https://venmo.com/'" />
                </form>
                
                
            </React.Fragment>
        )
    }
}