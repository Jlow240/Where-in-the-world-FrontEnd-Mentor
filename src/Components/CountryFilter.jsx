import React from 'react'
import "./styles/CountryFilter.css"

const CountryFilter = ({nameCountry, setNameCountry, handleChangeRegion}) => {
    return (
        <section className='countryFilter'>
            <div className='countryFilter__container-input'>
                <i className='countryFilter__icon bx bx-search-alt-2'></i>
                <input className='countryFilter__input' type="text" value={nameCountry} placeholder="Search for a country..." onChange={(e) => setNameCountry(e.target.value)} />
            </div>

            <select className='countryFilter__select' onChange={handleChangeRegion} placeholder="Filter by Region">
                <option value="">All</option>
                <option value="Africa">Africa</ option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

        </section>
    )
}

export default CountryFilter