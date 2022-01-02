import React, {useState, useEffect} from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

export const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const country = await response.json();
            setCountry(country);
            console.log(country);
        }
        fetchCountry();
    }, [])

    return (
        <>
            <section>
                <div className='return'>
                    <Link to={'/rest-countries-app/'}>
                        <button className='btn return-btn'><FaArrowLeft/> Back</button>
                    </Link>
                </div>

                {country.map((c) => {
                    const {name, flags, ccn3, population, region, subregion, languages, capital, currencies, borders, tld} = c;
                    
                    //console.log(Object.values(currencies)[0].name);
                    return(
                        <>
                            <article key={ccn3}>
                                <div className='country-image'>
                                    <img src={flags.png} alt={name.official}/>
                                </div>
                                <div>
                                    <h3>{name.official}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Sub Region: <span>{subregion}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                                <div>
                                    <h4>Top Level Domain: <span>{tld}</span></h4>
                                    <h4>Currencies: <span>{Object.values(currencies)[0].name}</span></h4>
                                    <h4>Languages: <span>{Object.values(languages).join(", ")}</span></h4>
                                </div>
                                <div>
                                    <h4>Borders: 
                                    {
                                        borders.map((border, index) => {
                                            return(
                                                <span key={index}>{border}</span>
                                            )
                                        })
                                    }
                                    </h4>
                                </div>
                            </article>
                        </>
                    )
                })}
            </section>
        </>
    )
}
