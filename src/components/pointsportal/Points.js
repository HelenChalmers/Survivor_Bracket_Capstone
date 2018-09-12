import React, { Component } from 'react'
import {Link} from "react-router-dom"
import PointsList from './PointsList'

export default class Points extends Component {

    

    render() {
        return (
            <React.Fragment>
                <PointsList {...this.props} getUserPoints={this.props.getUserPointsList}/>                
            </React.Fragment>
        )
    }
}

