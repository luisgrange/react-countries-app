import React from 'react'
import {FaMoon} from 'react-icons/fa'

export const Header = () => {
    return (
        <>
        <header>
            <div className='header'>
                <h1>Where in the world?</h1>
                <button className='btn'><FaMoon/> Dark mode</button>
            </div>
        </header>
        </>
        
    )
}
