import React from 'react'

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

type CryptoCurrencyProps = {
  cryptoCurrency: CryptoCurrencyType
  reloadCurrencies: () => void
}

export function CryptoCurrency() {
  return (
    <section className="currency-data">
      <h2>
        Rank:{props.id} Name:{props.name} Symbol:{props.symbol}{' '}
      </h2>
      <ul>
        <li>Supply:{props.supply} </li>
        <li>Max Supply:{props.maxSupply} </li>
        <li>Market Cap USD:{props.marketCapUsd} </li>
        <li>Volume USD 24hr:{props.volumeUsd24Hr} </li>
        <li>Price USD:{props.priceUsd} </li>
        <li>Percent Change 24hrs:{props.changePercent24Hr} </li>
        <li>VWAP 24hr:{props.vwap24Hr} </li>
        <li>Site:{props.explorer} </li>
      </ul>
      <ul></ul>
    </section>
  )
}
