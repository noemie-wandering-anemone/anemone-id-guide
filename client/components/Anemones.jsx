import React from 'react'
import {connect} from 'react-redux'

import Anemone from './Anemone'
import {getAnemones} from '../apiClient'
import {filterAnemones} from '../helpers'

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

    componentDidUpdate() {
        console.log(typeof filterAnemones)
        console.log(this.state.anemones)
        console.log(this.props.filters)
        filterAnemones(this.state.anemones, this.props.filters)
            .then(matchingAnemones => {
                this.setState({
                    anemones: matchingAnemones
                })
            })
    }
        // console.log(this.state.anemones)             

    


    render() {
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
    )
}
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Anemones)