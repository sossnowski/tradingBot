import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import 'dotenv/config'
import routes from 'routes'
import { errorFactory } from 'utils/errors/errorFactory';
import { errorHandler, handleUnhandledExceptions } from 'middlewares/errorHandler';

const app = express()
const MONGO_URI = process.env.MONGO_URI as string

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(morgan('tiny'));

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/v1', routes);
app.use((
    req: Request,
    res: Response,
    next: NextFunction,
  ) => next(errorFactory().notFoundError(req.path)));
app.use(errorHandler);

handleUnhandledExceptions();

process.on('SIGTERM', () => {
  // eslint-disable-next-line no-console
  console.info('SIGTERM received');
  mongoose.disconnect().then(() => { console.log('Disconnected') })
});

export default app;
