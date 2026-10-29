import { Card, Spin } from "antd";

function CryptocurrencyCard(props) {
  const { currency } = props;
  const price = currency.quote.USD.price.toFixed(6)
  const nkap = Math.round(currency.quote.USD.market_cap / 1_000_000_000).toLocaleString()

  const price24 = currency.quote.USD.percent_change_24h.toLocaleString()
  const isPositive = currency.quote.USD.percent_change_24h >= 0


  return (
    <Card
      title={
        <div className="flex items-center gap-3 w-140 h-30 font-bold text-2xl">

          <img
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
            alt={currency.name}
            width={70}
            height={70}
          />
          <span>{currency.name}</span>
        </div>
      }
    >
    <div className="flex flex-col gap-5 items-left w-140 h-30 text-lg font-semibold">
      <p>Текущая цена: {price} $</p>
      <p>
          Изменение цены за 24 часа:{' '}
          <span className={isPositive ? "text-emerald-500 font-semibold" : "text-rose-500 font-semibold"}>
            {price24}%
          </span>
        </p>
      <p>Текущая капитализация: ${nkap}B</p>
     </div>
    </Card>
  );
}

export default CryptocurrencyCard;