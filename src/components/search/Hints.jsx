import React from 'react'
import './search.css'

function Hints({ list, handleClick, currentIndex }) {
    return (
        <div className='hints__list__section'>
            <ul className='hints__list'>
                {
                    list?.map((ele, idx) => {
                        return (
                            <li
                                key={idx}
                                onClick={() => handleClick(idx)}
                                className={`${currentIndex === idx ? 'clicked__list' : 'unclicked__list'} `}>
                                {ele?.toUpperCase()}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hints
