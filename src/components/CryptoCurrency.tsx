import React from 'react'

type CryptoCurrencyProps = {
  cryptoCurrency: CryptoCurrencyType
}
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
export function CryptoCurrency({ cryptoCurrency }: CryptoCurrencyProps) {
  return (
    <section className="currency-data">
      <h3>
        {cryptoCurrency.rank} - {cryptoCurrency.name} ({cryptoCurrency.symbol})
      </h3>
      <ul>
        <li>Supply:{cryptoCurrency.supply} </li>
        <li>Max Supply:{cryptoCurrency.maxSupply} </li>
        <li>Market Cap USD:{cryptoCurrency.marketCapUsd} </li>
        <li>Volume USD 24hr:{cryptoCurrency.volumeUsd24Hr} </li>
        <li>Price USD:{cryptoCurrency.priceUsd} </li>
        <li>Percent Change 24hrs:{cryptoCurrency.changePercent24Hr} </li>
        <li>VWAP 24hr:{cryptoCurrency.vwap24Hr} </li>
      </ul>
    </section>
  )
}
