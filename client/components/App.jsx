import React from 'react'

import Header from './Header'
import LocationFilter from './LocationFilter'
import ColorFilter from './ColorFilter'
import GenusFilter from './GenusFilter'
// import ColumnFilter from './ColumnFilter'
// import TentaculesFilter from './TentaculesFilter'

class App extends React.Component {
  state = {
    fruits: []
  }

  render () {
    return (
      <div className='app'>
        <Header />
        <div id='filters'>
            <LocationFilter />
            <ColorFilter />
            <GenusFilter />
            {/* <ColumnFilter />
            <TentaculesFilter /> */}
        </div>
      </div>
    )
  }
}

export default App
