import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  error: HttpError | Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  res.status((error as HttpError).status || StatusCodes.INTERNAL_SERVER_ERROR).json(error);
};

export const handleUnhandledExceptions = () => {
  process.on('unhandledRejection', (reason: Error) => {
    throw reason;
  });

  process.on('uncaughtException', () => {
    process.exit(1);
  });
};
