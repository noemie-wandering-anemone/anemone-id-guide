import React from 'react'

import Header from './Header'
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
