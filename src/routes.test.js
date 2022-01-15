const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('Messages Routes', () => {
  it('should return all messages', async () => {
    const response = await request.get('/api/v1/messages');
    expect(response.status).toBe(200);
    const length = response.body.length;
    expect(length).toBeGreaterThan(1);
  });

  it('should return a message', async () => {
    const response = await request.get('/api/v1/messages/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });
});

describe('User Routes', () => {
  it('should return summary', async () => {
    const response = await request.get('/api/v1/summary');
    expect(response.status).toBe(200);
    expect(response.body[0].id).toBe(1);
  });
});
