import { Spot } from '@binance/connector-typescript';

const {BINANCE_API_KEY} = process.env;
const {BINANCE_API_SECRET} = process.env;
const {BINANCE_BASE_URL} = process.env

const client = new Spot(BINANCE_API_KEY, BINANCE_API_SECRET, { baseURL: BINANCE_BASE_URL})

export default client
