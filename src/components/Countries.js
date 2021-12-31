import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const url = 'https://restcountries.com/v2/all';


export const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetcCountries = async () =>{
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries );
    }

    useEffect(() => {
        fetcCountries();
    }, []);

    const handleChange = (el) => {
        if(el.length !== 0) {
            const newCountries = countries.filter(country => 
                country.name.toLowerCase().includes(el.toLowerCase()))
            setCountries(newCountries);
        }

        else{
            fetcCountries();
        }
    }

    //issue here, change this:
    const handleSChange = (el) =>{
        
        const newCountries = countries.filter(country => 
            country.region.toLowerCase().includes(el.toLowerCase())
        )
        setCountries(newCountries);
    }

    return (
        <>
            <div className='filter'>
                <form className='filter-form'>
                    <input
                        onChange={(e) => handleChange(e.target.value)} 
                        type='text' 
                        className='c-search' 
                        placeholder='Search for a country'
                    />
                </form>
                <div className='options'>
                    <select className='select' onChange={(e) => handleSChange(e.target.value)} >
                        <option value='Filter by Region'>Filter by Region</option>
                        <option value='Africa'>Africa</option>
                        <option value='America'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
            </div>
            <section className='grid'>
                {countries.map((country) => {
                    const {name, flag, region, population, capital, numericCode} = country;
                
                    return(
                        <Link key={numericCode} to={`/rest-countries-app/countries/${name}`}>
                            <article  className={name}>
                                <div className='image'>
                                    <img src={flag} alt={name} loading='lazy'/>
                                </div>
                                <div className='country-info'>
                                    <h3>{name}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                            </article>
                        </Link>
                        
                    )
                })}
            </section>
        </>
    )
}
