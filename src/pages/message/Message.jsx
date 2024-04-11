import React from 'react'
import Sidemenu from '../../components/sidemenu/Sidemenu'
import circleIcon from '../../assets/images/Icon.png'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

import './message.css'

function Message() {

    const navigate = useNavigate('')

    return (
        <section className='contact__section'>
            <Sidemenu />
            <div className='message__container'>
                <img src={circleIcon} alt='check' />
                <h1>Message Sent</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at risus mauris.</p>
                <Button
                    buttonText={'Close'}
                    width={'80px'}
                    background={'transparent'}
                    border={'2px solid #000'}
                    color={'#000'}
                    onClick={() => navigate('/')}
                />
            </div>
        </section>
    )
}

export default Message
