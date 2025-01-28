import {RestMarketTypes} from '@binance/connector-typescript'
import client from "config/binance"
import { Trade } from 'models/Trade';
import { TradeType } from 'types/tradesTypes';
import { getLowestAndHighestPrice } from 'utils';

export const fetchLastBinanceTrades = async (limit: string) => {
    const SYMBOL = process.env.SYMBOL as string
    const DEFAULT_LIMIT = process.env.TARDES_DEFAULT_LIMIT
    const options: RestMarketTypes.recentTradesListOptions = {
        limit: parseInt(limit, 10) ?? DEFAULT_LIMIT,
    };
    return client.recentTradesList(SYMBOL, options);
}

export const saveTradesToDb = async (trades: RestMarketTypes.recentTradesListResponse[]) => {
    const tradeDocs = trades.map((trade: RestMarketTypes.recentTradesListResponse) => new Trade({
        price: parseFloat(trade.price),
        quantity: parseFloat(trade.qty),
        timestamp: new Date(trade.time),
      }));
    await Trade.insertMany(tradeDocs);
}

export const getAnalysis = async (timestamp: string) => {
    const trades = await Trade.find({ timestamp: { $gt: timestamp } }) as unknown as TradeType[];
    const{lowest, highest} = await getLowestAndHighestPrice(trades)

    return {lowest, highest}
}

export const formatAnalysis = (lowest: number, highest: number) => `Lowest price in selected period was ${lowest}, and highest price was ${highest}`
