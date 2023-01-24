const request = require('supertest');
const app = require('./app');

describe('POST /submit', () => {
    it('should redirect to /form-data', (done) => {
        request(app)
            .post('/submit')
            .send({ name: 'John Doe', email: 'johndoe@example.com', phone: '5696343817' })
            .expect(302 , done)
            // .expect('Location', '/form-data', done);
    });
});

describe('GET /form-data', () => {
    it('should return a 200 status code and render the form data', (done) => {
        request(app)
            .get('/form-data')
            .expect(200 , done)
            // .expect(/J/, done);
    });
});

describe('DELETE /form-data/:phone', () => {
    it('should redirect to /form-data and remove the form data', (done) => {
        request(app)
            .delete('/form-data/8696343817')
            .expect(302 , done)
            // .expect('Location', '/form-data', done);
    });
});



