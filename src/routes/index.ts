import express from 'express';
import tradesRoutes from 'routes/tradeRoutes';

const router = express.Router();

const applicationRoutes = [
    {
        path: '/trades',
        route: tradesRoutes
    }
]

applicationRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  export default router;
