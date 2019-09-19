import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../apiClient'
import{addFilter} from '../actions/index'

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

                <select id="genus" onChange={()=> {this.props.dispatch(addFilter(event.target.id, event.target.value))}}>
                    <option value="">----</option>
                    {this.state.genus.map(genus => (
                        <option key={genus}>{genus}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect()(GenusFilter)