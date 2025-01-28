import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

export const errorFactory = () => ({
  badRequestError: (message?: string) => createError(StatusCodes.BAD_REQUEST, message ?? 'Bad request error'),
  internalServerError: (message?: string) => createError(StatusCodes.INTERNAL_SERVER_ERROR, message ?? 'Internal server error. Try later!'),
  notFoundError: (message?: string) => createError(StatusCodes.NOT_FOUND, message ?? 'Not found error'),
});
