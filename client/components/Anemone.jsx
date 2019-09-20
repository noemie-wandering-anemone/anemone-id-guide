import React from 'react'

const Anemone = (props) => {
    const anemone = props.anemone
    return (
        <div className='anemone'>
            <p>{anemone.name}</p>
        </div>
    )
}

export default Anemone