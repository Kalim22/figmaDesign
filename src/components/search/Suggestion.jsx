import React from 'react'

function Suggestion({suggestion}) {
  return (
    <div className='suggestion__container'>
      <p>Suggestion</p>
      <div className='suggestion__list__container'>
            {
                suggestion?.length < 1 ? 
                <p>No Suggestion</p> : suggestion?.map((ele, idx) => {
                    return(
                        <p key={idx}>{ele}</p>
                    )
                })
            }
      </div>
    </div>
  )
}

export default Suggestion
