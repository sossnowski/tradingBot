import request from 'supertest';
import { getHistoricalTransactions, analysisHistoricalData } from 'controllers/tradesController';
import app from '../../app';

jest.mock('controllers/tradesController', () => ({
  getHistoricalTransactions: jest.fn(),
  analysisHistoricalData: jest.fn(),
}));

describe('Trades Routes', () => {
  describe('GET /trades/:limit', () => {
    it('should return historical trades when valid limit is provided', async () => {
      (getHistoricalTransactions as jest.Mock).mockResolvedValue([{ price: 100, timestamp: '1672531200000', quantity: 0.1 }]);

      const response = await request(app).get('/api/v1/trades/10');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([{ price: 100, timestamp: '1672531200000', quantity: 0.1 }]);
      expect(getHistoricalTransactions).toHaveBeenCalledWith('10');
    });

    it('should return 400 if limit validation fails', async () => {
      const response = await request(app).get('/api/v1/trades/invalidLimit');

      expect(response.status).toBe(422);
    });
  });

  describe('GET /trades/analysis/:timestamp', () => {
    it('should return analysis data for valid timestamp', async () => {
      (analysisHistoricalData as jest.Mock).mockResolvedValue('tmp response from analysis function');

      const response = await request(app).get('/api/v1/trades/analysis/1672531200000');

      expect(response.status).toBe(200);
      expect(response.body).toEqual('tmp response from analysis function');
      expect(analysisHistoricalData).toHaveBeenCalledWith('1672531200000');
    });

    it('should return 400 if timestamp validation fails', async () => {
      const response = await request(app).get('/api/v1/trades/analysis/ ');

      expect(response.status).toBe(422);
    });
  });
});
