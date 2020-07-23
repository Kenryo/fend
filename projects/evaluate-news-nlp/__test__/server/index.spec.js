const { app } = require('../../src/server/index')
const request = require('supertest');

test('get /test', () => {
    const response = [
        {
            title: 'test json response',
            message: 'this is a message',
            time: 'now'
        }
    ]
    request(app).get('/test')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(response);
    })
});