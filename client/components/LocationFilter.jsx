import React from 'react'

import {getData} from '../apiClient'

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

                <select id="location">
                    <option value="">----</option>
                    {this.state.location.map(location => (
                        <option key={location}>{location}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default LocationFilter