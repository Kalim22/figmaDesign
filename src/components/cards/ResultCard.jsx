import React from 'react'

function ResultCard({ src }) {
    return (
        <div className='result__card'>
            <img src={src}
                alt='images'
            />
        </div>
    )
}

export default ResultCard
