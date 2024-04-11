import React from 'react'
import { FaRegEye } from "react-icons/fa6";

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
