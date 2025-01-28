import client from "config/binance"

export const fetchLastBinanceTrades = async () => {
    const SYMBOL = process.env.SYMBOL as string
    const trades = await client.recentTradesList(SYMBOL);
    console.log(trades)
}
