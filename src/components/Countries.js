import React, {useState, useEffect} from 'react'

const url = 'https://restcountries.com/v2/all';



export const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetcCountries = async () =>{
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries );
        }

        fetcCountries();
    }, []);


    return (
        <>
            <section className='grid'>
                {countries.map((country) => {
                    const {name, flag, region, population, capital, numericCode} = country;
                
                    return(
                        <article key={numericCode} >
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
                    )
                })}
            </section>
        </>
    )
}
