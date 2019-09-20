import React from 'react'

import Header from './Header'
import LocationFilter from './LocationFilter'
import ColorFilter from './ColorFilter'
import GenusFilter from './GenusFilter'
import ColumnFilter from './ColumnFilter'
import TentaculesFilter from './TentaculesFilter'
import Anemones from './Anemones'

class App extends React.Component {

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
        <Anemones />
      </div>
    )
  }
}

export default App
