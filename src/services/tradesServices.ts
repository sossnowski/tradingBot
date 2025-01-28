import {RestMarketTypes} from '@binance/connector-typescript'
import client from "config/binance"
import { Trade } from 'models/Trade';

export const fetchLastBinanceTrades = async () => {
    const SYMBOL = process.env.SYMBOL as string
    return client.recentTradesList(SYMBOL);
}

export const saveTradesToDb = async (trades: RestMarketTypes.recentTradesListResponse[]) => {
    const tradeDocs = trades.map((trade: RestMarketTypes.recentTradesListResponse) => new Trade({
        price: parseFloat(trade.price),
        quantity: parseFloat(trade.qty),
        timestamp: new Date(trade.time),
      }));
      await Trade.insertMany(tradeDocs);
}
