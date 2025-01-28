import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { analysisHistoricalData, getHistoricalTransactions } from 'controllers/tradesController';

const router = express.Router()

router.get(
    '/:limit',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const {limit} = req.params
        const historicalTrades = await getHistoricalTransactions(limit);
        res.status(StatusCodes.OK).json(historicalTrades);
      } catch (error) {
        next(error);
      }
    },
  );

  router.get(
    '/analysis/:timestamp',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const {timestamp} = req.params
        const analysis = await analysisHistoricalData(timestamp);
        res.status(StatusCodes.OK).json(analysis);
      } catch (error) {
        next(error);
      }
    },
  );

  export default router
