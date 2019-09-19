import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../apiClient'
import{addFilter} from '../actions/index'

class ColumnFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            column: []
        }
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
                <label htmlFor="column">Column:</label>

                <select id="column" onChange={()=> {this.props.dispatch(addFilter(event.target.id, event.target.value))}}>
                    <option value="">----</option>
                    {this.state.column.map(column => (
                        <option key={column}>{column}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect()(ColumnFilter)