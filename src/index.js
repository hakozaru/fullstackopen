import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [inputCountryName, setInputCountryName] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setAllCountries(res.data)
    })
  }, [])

  const runSearch = (e) => {
    e.preventDefault()
    const result = allCountries.filter(country => {
      return country.name.match(new RegExp(inputCountryName, 'i'))
    })
    setSearchResult(result)
  }

  const displaySearchResult = () => {
    const results = searchResult.length

    if(results === 0) {
      return(<div>prease fill in country name.</div>)
    } else if(results === 1) {
      const countryInfo = searchResult[0]
      const langs = countryInfo.languages.map(lan => {
        return(<li key={lan.name}>{lan.name}</li>)
      })

      return(
        <>
          <h2>{countryInfo.name}</h2>
          <div>capital {countryInfo.capital}</div>
          <div>population {countryInfo.population}</div>
          <h2>languages</h2>
          <ul>{langs}</ul>
          <img src={countryInfo.flag} width="250px" />
        </>
      )
    } else if(results > 10) {
      return(<div>Too many matches, specify another filter.</div>)
    } else if(results <= 10) {
      return(
        searchResult.map(r => {
          return(<div key={r.name}>{r.name}</div>)
        })
      )
    }
  }

  return(
    <div>
      find countries
      <form onSubmit={runSearch}>
        <input
          value={inputCountryName}
          onChange={(e) => setInputCountryName(e.target.value)}
        />
      </form>
      {displaySearchResult()}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
