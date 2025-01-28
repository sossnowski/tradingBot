import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getHistoricalTransactions } from 'controllers/tradesController';

const router = express.Router()

router.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const historicalTrades = await getHistoricalTransactions();
        res.status(StatusCodes.OK).json(historicalTrades);
      } catch (error) {
        next(error);
      }
    },
  );

  export default router
