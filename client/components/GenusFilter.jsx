import React from 'react'

import {getData} from '../apiClient'

class GenusFilter extends React.Component {
    state = {
        genus: []
    }

    componentDidMount() {
        getData('genus')
            .then(genus => {
                this.setState({ genus })
            })
    }

    render() {
        return (
            <div className='filter'>
                <label htmlFor="genus">Genus:</label>

                <select id="genus">
                    <option value="">----</option>
                    {this.state.genus.map(genus => (
                        <option key={genus}>{genus}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default GenusFilter