import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CountryCard from './Components/CountryCard'
import CountryFilter from './Components/CountryFilter'
import NavBar from './Components/NavBar'

function App() {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState("")
  // estado para guardar el nombre del pais del input con base al value y el onChange
  const [nameCountry, setNameCountry] = useState("")
  const [theme, setTheme] = useState("dark")

  const handleChangeRegion = (e) => setRegion(e.target.value)

  const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()))

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/${region ? "region/" + region : "all"}`
    axios.get(URL)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))
  }, [region])


  return (
    <div className="App" id={theme}>
      <NavBar theme={theme} changeTheme={changeTheme}/>
      <CountryFilter 
      nameCountry={nameCountry} 
      setNameCountry={setNameCountry} 
      handleChangeRegion={handleChangeRegion}/>


      <section className='app__container'>
        {
          countriesFilter.map((country) => <CountryCard key={country.flags.svg} country={country} />)
        }
      </section>
    </div>
  )
}

export default App
