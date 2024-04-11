import React, { useEffect, useState } from 'react'
import Input from '../../components/inputs/Input'
import Hints from '../../components/search/Hints'
import Suggestion from '../../components/search/Suggestion'
import { BiPlus } from 'react-icons/bi'


function Search({ setShowSearch, setValue, value }) {

    const [hints, setHints] = useState([
        'All',
        'Until',
        'Clocks',
        'Jewels',
        'Desgin'
    ])
    const [suggestion, setSuggestion] = useState([])
    const [currentIndex, setCurrentIndex] = useState(1)

    const handleClick = id => {
        return setCurrentIndex(id)
    }

    useEffect(() => {
        if (value !== '') {
            setTimeout(() => {
                return setSuggestion(['Salvador Dalì', 'Andy Warhol', 'Gennaro Guttuso'])
            }, 1300)
        }
    }, [value])

    return (
        <div className='search__container'>
            <BiPlus size={30} className='close' onClick={() => {
                setShowSearch(false)
                setValue('')
            }} />
            <Input
                className="input__field"
                width={'80%'}
                onChange={e => setValue(e.target.value)}
                value={value}
                placeholder={'Search your keywords'}
                type={'text'}
            />
            <Hints list={hints} handleClick={handleClick} currentIndex={currentIndex} />
            <Suggestion suggestion={suggestion} />
        </div>
    )
}

export default Search
