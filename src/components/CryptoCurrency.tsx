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
  function loadImage() {
    return `https://raw.githubusercontent.com/Pymmdrza/Cryptocurrency_Logos/mainx/SVG/${cryptoCurrency.symbol.toLowerCase()}.svg`
  }
  const positive = cryptoCurrency.changePercent24Hr > 0
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <tr className="currency-data">
      <td>{cryptoCurrency.rank}</td>
      <td>
        <a href={cryptoCurrency.explorer}>{cryptoCurrency.name}</a>
      </td>
      <td>
        <img src={loadImage()} />
      </td>
      <td>({cryptoCurrency.symbol})</td>
      <td>{USDollar.format(cryptoCurrency.supply)}</td>
      <td>{USDollar.format(cryptoCurrency.maxSupply)}</td>
      <td>{USDollar.format(cryptoCurrency.marketCapUsd)}</td>
      <td>{USDollar.format(cryptoCurrency.volumeUsd24Hr)}</td>
      <td>{USDollar.format(cryptoCurrency.priceUsd)}</td>
      <td className={positive ? 'up' : 'down'}>
        {USDollar.format(cryptoCurrency.changePercent24Hr)}
      </td>
      <td>{USDollar.format(cryptoCurrency.vwap24Hr)}</td>
    </tr>
  )
}
