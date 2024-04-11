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
        'Design'
    ])
    const [suggestion, setSuggestion] = useState(['Salvador Dalì', 'Andy Warhol', 'Gennaro Guttuso'])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = id => {
        return setCurrentIndex(id)
    }

    const handleResize = () => {
        console.log(window.innerWidth)
        if(window.innerWidth < 600){
            return setCurrentIndex(1)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='search__container'>
            <BiPlus size={30} className='close' onClick={() => {
                setShowSearch(false)
                setValue('')
            }} />
            <Input
                className="input__field"
                width={'90%'}
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
