import React from 'react'
import {connect} from 'react-redux'

import {getAnemones} from '../apiClient'

class Anemones extends React.Component {


    componentDidMount() {
        getAnemones()
            .then(result => {
                console.log(result)
            })
    }

    render() {
    return (
        <div id='anemones'>
          Anemones
        </div>
    )}
}

export default Anemones