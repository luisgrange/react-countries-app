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
                                <img src={flag} alt={name}/>
                            </div>
                            <div className='country-info'>
                                <h1>{name}</h1>
                                <p>Population: <span>{population}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}
