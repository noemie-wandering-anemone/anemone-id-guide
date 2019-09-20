import React from 'react'
import {connect} from 'react-redux'

import Anemone from './Anemone'
import {getAnemones} from '../apiClient'

class Anemones extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            anemones: [],
        }
    }

    componentDidMount() {
        getAnemones()
            .then(anemones => {
                this.setState({
                    anemones: anemones
                })
            })
    }

    // filterAnemone = () => {
    //     const matchingAnemones = this.state.anemones.filter(anemone => {
    //         for (const prop in this.props.filters) {
    //             if (anemone[prop]) {
    //                 console.log(anemone)
    //             }
    //         }
    //     })
    // }
   

    render() {
    return (
        <div id='content'>
            <h2>Anemones Species</h2>
            <div id='anemones'>
                {/* {this.filterAnemone() */}
                 {   this.state.anemones.map(anemone => {
                    return (
                        <Anemone key={anemone.id} anemone={anemone} />
                    )
                })}
            </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Anemones)