import React from 'react'
import {connect} from 'react-redux'

import Anemone from './Anemone'
import {getAnemones} from '../apiClient'
import {filterAnemones} from '../helpers'
import {listAnemones} from '../actions'

class Anemones extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            matchingAnemones: [],
        }
    }


    componentDidMount () {
        getAnemones()
            .then(anemones => {
                this.props.dispatch(listAnemones(anemones))
                this.setState({matchingAnemones: anemones})
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.filters != prevProps.filters) {
            Promise.all(filterAnemones(this.props.anemones, this.props.filters))
            .then(matchingAnemones => {
                console.log('component', matchingAnemones)
                this.setState({
                    matchingAnemones: matchingAnemones
                })
            })
        } 
    }

    render() {
        return (
        <div id='content'>
            <h2>Anemones Species</h2>
            <div id='anemones'>
                 {this.state.matchingAnemones.map(anemone => {
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
        filters: state.filters,
        anemones: state.anemones
    }
}

export default connect(mapStateToProps)(Anemones)