const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe('API CRUD Tests', () => {

    it('get request at /api/employees', function(done) {
        this.timeout(5000)
        chai.request(app)
        .get('/api/employees')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            done();
        })
    })

    it('get request at /api/employees/:uuid', function(done) {
        this.timeout(5000)
        chai.request(app)
        .get('/api/employees/334197e8-cd38-4319-a2f7-cc3d56b74a48')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('uuid').eq('334197e8-cd38-4319-a2f7-cc3d56b74a48')
            done();
        })
    })

    it('incorrect get request at /api/employees/:uuid', function(done) {
        this.timeout(5000)
        chai.request(app)
        .get('/api/employees/abc')
        .end((err, response) => {
            response.should.have.status(200);
            chai.assert(response.body === null);
            done();
        })
    })

    it('post request at /api/employees', function(done) {
        this.timeout(5000)
        chai.request(app)
        .post('/api/employees')
        .send({
            firstName: "Shahiddddddddd",
            lastName: "Anwarrrrrrrrr",
            email: "shahid11222222222@gmail.com"
        })
        .end((err, response) => {
            response.should.have.status(200);
            console.log(response.body)
            response.body.should.not.have.property('code').eq(10);
            done();
        })
    })

    it('delete request at /api/employees/:uuid', function(done) {
        this.timeout(5000)
        chai.request(app)
        .delete('/api/employees/334197e8-cd38-4319-a2f7-cc3d56b74a48')
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.not.have.property('code').eq(40);
            done();
        })
    })

    it('put request at /api/employees/:uuid', function(done) {
        this.timeout(5000)
        chai.request(app)
        .put('/api/employees/fb11004b-f823-4f39-a3a1-1c5745e4731f')
        .send({
            firstName: "Lemon",
            lastName: "King",
            email: "lemonking@gmail.com"
        })
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.not.have.property('code').eq(50);
            done();
        })
    })


    it('patch request at /api/employees/:uuid', function(done) {
        this.timeout(5000)
        chai.request(app)
        .put('/api/employees/fb11004b-f823-4f39-a3a1-1c5745e4731f')
        .send({
            email: "lemonking123123@gmail.com"
        })
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.not.have.property('code').eq(60);
            done();
        })
    })

    it('post request at /api/employees', function(done) {
        this.timeout(5000)
        chai.request(app)
        .post('/api/employees')
        .send({
            lastName: "Anwarrrrrr",
            email: "shahid112222222@gmail.com"
        })
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('code').eq(100);
            done();
        })
    })

})