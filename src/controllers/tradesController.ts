import {
 fetchLastBinanceTrades, formatAnalysis, getAnalysis, saveTradesToDb
} from "services/tradesServices"
import { errorFactory } from "utils/errors/errorFactory";

export const getHistoricalTransactions = async (limit: string) => {
    const lastTrades = await fetchLastBinanceTrades(limit)
    await saveTradesToDb(lastTrades);

    return lastTrades;
}

export const analysisHistoricalData = async (timestamp: string) => {
    if (!timestamp) throw errorFactory().badRequestError('timestamp required')
    const analysis = await getAnalysis(timestamp)

    return formatAnalysis(analysis.lowest, analysis.highest)
}
