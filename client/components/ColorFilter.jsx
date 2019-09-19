import React from 'react'

import {getData} from '../apiClient'

class ColorFilter extends React.Component {
    state = {
        color: []
    }

    componentDidMount() {
        getData('color')
            .then(color => {
                this.setState({ color })
            })
    }

    render() {
        return (
            <div className='filter'>
                <label htmlFor="color">Color:</label>

                <select id="color">
                    <option value="">----</option>
                    {this.state.color.map(color => (
                        <option key={color}>{color}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default ColorFilter