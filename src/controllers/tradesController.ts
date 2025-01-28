import { fetchLastBinanceTrades } from "services/tradesServices"

export const getHistoricalTransactions = () => {
    const lastTrades = fetchLastBinanceTrades()
}
