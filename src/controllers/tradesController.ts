import { fetchLastBinanceTrades, saveTradesToDb } from "services/tradesServices"

export const getHistoricalTransactions = async () => {
    const lastTrades = await fetchLastBinanceTrades()
    await saveTradesToDb(lastTrades);

    return lastTrades;
}
