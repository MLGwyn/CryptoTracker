import axios from 'axios'
import React, { useState } from 'react'
import assets from './assets.json'
import { CryptoCurrency } from './components/CryptoCurrency'

export type CryptoCurrencyType = {
  id: string
  rank: number
  symbol: string
  name: string
  supply: number
  maxSupply: number
  marketCapUsd: number
  volumeUsd24Hr: number
  priceUsd: number
  changePercent24Hr: number
  vwap24Hr: number
  explorer: string
}

export function App() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<
    CryptoCurrencyType[]
  >([])
  function loadAllData() {
    async function loadItems() {
      const response = await axios.get('https://api.coincap.io/v2/assets')
      if (response.status === 200) {
        console.log(response.data)
      }
    }
    loadItems()
  }
  // const cryptoCurrenciesFromData = assets.map((currency) => (
  //   <CryptoCurrencyType
  //     key={currency.id}
  //     rank={currency.id}
  //     symbol={currency.symbol}
  //     name={currency.name}
  //     supply={currency.supply}
  //     maxSupply={currency.maxSupply}
  //     marketCapUsd={currency.marketCapUsd}
  //     volumeUsd24Hr={currency.volumeUsd24Hr}
  //     priceUsd={currency.priceUsd}
  //     changePercent24Hr={currency.changePercent24Hr}
  //     vwap24Hr={currency.vwap24Hr}
  //     explorer={currency.explorer}
  //   />
  // ))

  return (
    <div className="all-content">
      <main>
        <h1>MELISSA'S CRYPTO TRACKER</h1>
        <section className="currency-data">
          <h2>Rank:1 Name: Bitcoin Symbol:BTC</h2>
          <ul>
            <li>Supply: 19699693.0000000000000000</li>
            <li>Max Supply: 21000000.0000000000000000</li>
            <li>Market Cap USD: 1315269402102.4076428731440099</li>
            <li>Volume USD 24hr: 7202208890.0214744350826841</li>
            <li>Price USD: 66765.9847339959888143</li>
            <li>Percent Change 24hr: 2.3460302309865676</li>
            <li>VWAP 24hr: 66379.1256756531168231</li>
            <li>Site: https://blockchain.info/</li>
          </ul>
          <ul>{cryptoCurrencies.map(function (cryptoCurrency) {
            return (
              <CryptoCurrency
              key={cryptoCurrency.id}
              cryptoCurrency={cryptoCurrency}
            )
          })}</ul>
        </section>
      </main>
    </div>
  )
}
