import React from 'react'

import Header from './Header'
import LocationFilter from './LocationFilter'
import ColorFilter from './ColorFilter'
import GenusFilter from './GenusFilter'
import ColumnFilter from './ColumnFilter'
import TentaculesFilter from './TentaculesFilter'
import { getFruits } from '../apiClient'

class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
  }

  render () {
    return (
      <div className='app'>
        <Header />
        <div id='filters'>
            <LocationFilter />
            <ColorFilter />
            <GenusFilter />
            <ColumnFilter />
            <TentaculesFilter />
        </div>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
