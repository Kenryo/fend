const { app, server } = require('../../src/server/index')
const request = require('supertest');


beforeEach(() => {
    // close default server for testing with supertest
    server.close();
});

describe('Get Endpoints', () => {

    it('Get root Endpoint should return html text response', () => {
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

    it('should return json response with 200 status for valid URL', () => {

        return request(app).post('/sentiment').send({url: 'https://google.com'})
        .then( res => {

            expect(res.status).toEqual(200);
            expect(res.type).toEqual('application/json');
            expect(res.body.status.code).toEqual('0');
        })
    });

    it('should return json response with error status for invalid URL', () => {

        return request(app).post('/sentiment').send({url: 'invalidurl'})
        .then( res => {

            expect(res.status).toEqual(200);
            expect(res.type).toEqual('application/json');
            expect(res.body.status.code).not.toEqual('0');

        })
    });

});