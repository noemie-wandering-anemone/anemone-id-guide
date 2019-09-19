import React from 'react'

import {getData} from '../apiClient'

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

                <select id="tentacules">
                    <option value="">----</option>
                    {this.state.tentacules.map(tentacules => (
                        <option key={tentacules}>{tentacules}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default TentaculesFilter