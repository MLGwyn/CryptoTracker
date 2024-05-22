import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CryptoCurrency, CryptoCurrencyType } from './components/CryptoCurrency'

export function App() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<
    CryptoCurrencyType[]
  >([])
  async function loadCurrencies() {
    const response = await axios.get('https://api.coincap.io/v2/assets')
    if (response.status === 200) {
      setCryptoCurrencies(response.data.data)
    }
  }
  function loadAllData() {
    loadCurrencies()
    setInterval(loadCurrencies, 10000)
  }
  useEffect(loadAllData, [])

  return (
    <div className="all-content">
      <main>
        <h1>MELISSAS CRYPTO TRACKER</h1>
        {cryptoCurrencies.map(function (cryptoCurrency) {
          return (
            <CryptoCurrency
              key={cryptoCurrency.id}
              cryptoCurrency={cryptoCurrency}
            />
          )
        })}
      </main>
    </div>
  )
}
