import React from 'react'
import {connect} from 'react-redux'

import {getData} from '../apiClient'
import{addFilter} from '../actions/index'

class ColorFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: []
        }
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

                <select id="color" onChange={()=> {this.props.dispatch(addFilter(event.target.id, event.target.value))}}>
                    <option value="">----</option>
                    {this.state.color.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect()(ColorFilter)