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

                    return(
                        <>
                            <article key={ccn3}>
                                <div className='country-image'>
                                    <img src={flags.png} alt={name.common}/>
                                </div>
                                <div>
                                    <h3>{name.common}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                </div>
                            </article>
                        </>
                    )
                })}
            </section>
        </>
    )
}
