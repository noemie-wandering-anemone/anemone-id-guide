import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../apiClient'
import{addFilter} from '../actions/index'

class TentaculesFilter extends React.Component {
    state = {
        tentacules: []
    }

    componentDidMount() {
        getData('tentacules')
            .then(tentacules => {
                this.setState({ tentacules })
            })
    }

    render() {
        return (
            <div className='filter'>
                <label htmlFor="tentacules">Tentacules:</label>

                <select id="tentacules" onChange={()=> {this.props.dispatch(addFilter(event.target.id, event.target.value))}}>
                    <option value="">----</option>
                    {this.state.tentacules.map(tentacules => (
                        <option key={tentacules}>{tentacules}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect()(TentaculesFilter)