import React from 'react'

const Anemone = (props) => {
    const anemone = props.anemone
    return (
        <div className='anemone'>
            <p>{anemone.name}</p>
            <p>{anemone.genus} {anemone.species}</p>
        </div>
    )
}

export default Anemone