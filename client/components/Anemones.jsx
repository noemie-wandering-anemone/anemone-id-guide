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

    render() {
        console.log(this.props.filters)
        console.log(this.state)
    return (
        <div id='content'>
            <h2>Anemones Species</h2>
            <div id='anemones'>
                {this.state.anemones.map(anemone => {
                    console.log(anemone)
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