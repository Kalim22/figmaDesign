import React, { useState } from 'react'
import menu from '../../assets/images/menu_black.png'
import group from '../../assets/images/Group.png'
import textsms from '../../assets/images/textsms.png'
import textsmsblack from '../../assets/images/textsms_black.png'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Sidemenu() {
    const location = useLocation()

    return (
        <div className='sidemenu'>
            <div>
                <img src={menu} alt='menu btn' />
            </div>
            <div>
                <img src={group} alt='group btn' />
            </div>
            <NavLink to={'/contact'} className={'active'} style={{background: location?.pathname === '/' ? '' : '#000' }}>
                <img src={location?.pathname === '/' ? textsms : textsmsblack } alt='text sms btn' />
            </NavLink>
        </div>
    )
}

export default Sidemenu
