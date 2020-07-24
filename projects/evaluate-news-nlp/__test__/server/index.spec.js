const { app } = require('../../src/server/index')
const request = require('supertest');

describe('Get /test Endpoint', () => {

    it('Get /test Endpoint should return json response', () => {
        return request(app).get('/')
        .then( res => {
            expect(res.status).toEqual(200);
            expect(res.type).toEqual('text/html')
        })
    });

    it('Get /test Endpoint should return json response', () => {
        const response = {
                title: 'test json response',
                message: 'this is a message',
                time: 'now'
            }

        return request(app).get('/test')
        .then( res => {

            expect(res.status).toEqual(200);
            expect(res.type).toEqual('application/json');
            expect(res.body).toEqual(response);
        })
    });

});

describe('Post /sentiment Endpoint', () => {

    it('should return json response', () => {
        const response = {
                title: 'test json response',
                message: 'this is a message',
                time: 'now'
            }

        return request(app).post('/sentiment', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: 'https://google.com'})
        })
        .then( res => {

            expect(res.status).toEqual(200);
            // expect(res.body).toEqual(response);
        })
    });


});