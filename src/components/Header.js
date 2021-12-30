import React, {useState} from 'react'
import {FaMoon, FaRegMoon} from 'react-icons/fa'
//FaRegMoon

export const Header = () => {
    const [moon, setMoon] = useState(<FaMoon/>)

    const handleClick = () =>{
        document.body.classList.toggle('light');

        document.body.classList.contains('light') ? setMoon(<FaRegMoon/>) : setMoon(<FaMoon/>);
    }
   

    return (
        <>
        <header>
            <div className='header'>
                <h1>Where in the world?</h1>
                <button onClick={() => handleClick()} className='btn'>
                    {moon}
                    Dark mode
                </button>
            </div>
        </header>
        </>
        
    )
}
