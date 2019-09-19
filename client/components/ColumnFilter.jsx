import React from 'react'

import {getData} from '../apiClient'

class ColumnFilter extends React.Component {
    state = {
        column: []
    }

    componentDidMount() {
        getData('column')
            .then(column => {
                this.setState({ column })
            })
    }

    render() {
        return (
            <div className='filter'>
                <label htmlFor="column">column:</label>

                <select id="column">
                    <option value="">----</option>
                    {this.state.column.map(column => (
                        <option key={column}>{column}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default ColumnFilter