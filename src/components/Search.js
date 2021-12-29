import React from 'react'

export const Search = () => {
    return (
        <div className='filter'>
            <form className='filter-form'>
            <input type='text' className='c-search' placeholder='Search for a country'/>
            </form>
            <div className='options'>
                <select>
                    <option value='Filter by Region'>Filter by Region</option>
                    <option className='opt' value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
        </div>
    )
}
