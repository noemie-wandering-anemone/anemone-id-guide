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
        // Starting point:
        //      - array of anemones objects
        //      - a filters object
        let filtersArray = Object.entries(this.props.filters)
        let anemones = this.state.anemones
        // Goal:
        // Look at each filter:
        //      check if anemone matches the filter
            let matchingAnemones = anemones.filter(filteringFunction) 
            console.log('win?', matchingAnemones)
        console.log('filtering', filteringFunction(anemones[0]))
        //  Check:
        function filteringFunction (anemone) {
            return filtersArray.map(filter => {
            //      if anemone has filter key and filter value
                    if (anemone[filter[0]] != [filter[1]]) {
            //      if not matching, remove it from array
                        return false        }
            //      if yes keep the anemone    
                    return true
            })[0]
        }
                       
    return (
        <div id='content'>
            <h2>Anemones Species</h2>
            <div id='anemones'>
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