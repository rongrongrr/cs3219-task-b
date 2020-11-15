// Import the dependencies for testing
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Products", () => {
    describe("GET /", () => {
        // Test to get all products
        it("should get all products", (done) => {
             chai.request(app)
                 .get('/api/products')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});

describe("Outlets", () => {
    describe("GET /", () => {
        // Test to get all outlets
        it("should get all outlets", (done) => {
             chai.request(app)
                 .get('/api/outlets')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});