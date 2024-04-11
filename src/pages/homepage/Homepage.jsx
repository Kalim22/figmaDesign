import React, { useState } from 'react'
import { resultList } from '../../assets/constants/constants'
import ResultCard from '../../components/cards/ResultCard'
import Header from '../../components/header/Header'
import Search from '../search/Search'
import './homepage.css'

function Homepage() {

   const [showSearch, setShowSearch] = useState(false)
   const [value, setValue] = useState('')

    return (
        <section className='homepage__container'>
            <Header setShowSearch={setShowSearch}/>
            <div className='main__content'>
                <div className='homepage__banner'>
                    <h1>{value === '' ? 'Giorgio De Chirico' : ''}</h1>
                </div>
                <div className='result__container'>
                    <p>Result <span>1,345</span></p>
                    
                    <div className='result__list'>
                        {
                            resultList && resultList?.map((ele, idx) => {
                                return (
                                    <ResultCard
                                        key={idx}
                                        src={ele?.src}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {showSearch && <Search setShowSearch={setShowSearch} setValue={setValue} value={value} />}
        </section>
    )
}

export default Homepage
