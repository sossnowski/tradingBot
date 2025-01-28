import { TradeType } from "types/tradesTypes";
import { errorFactory } from "./errors/errorFactory";

export const getLowestAndHighestPrice = (trades: TradeType[]) => {
    if(!trades || !trades.length) throw errorFactory().internalServerError('Cannot make analysis')
    const obj = {lowest: trades[0].price, highest: trades[0].price}
    trades.forEach((trade) => {
        if (trade.price > obj.highest) obj.highest = trade.price;
        else if (trade.price < obj.lowest) obj.lowest = trade.price;
    })

    return obj
}
