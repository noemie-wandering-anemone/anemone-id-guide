import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../apiClient'
import{addFilter} from '../actions/index'

class LocationFilter extends React.Component {
    state = {
        location: []
    }

    componentDidMount() {
        getData('location')
            .then(location => {
                this.setState({ location })
            })
    }

    render() {
        return (
            <div className='filter'>
                <label htmlFor="location">Location:</label>

                <select id="location" onChange={()=> {this.props.dispatch(addFilter(event.target.id, event.target.value))}}>
                    <option value="">----</option>
                    {this.state.location.map(location => (
                        <option key={location}>{location}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect()(LocationFilter)