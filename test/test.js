let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Retrieve articles', () => {
    describe('/articles should get all the articles', () => {
      it('Get all articles', (done) => {
        chai.request(server).get('/articles').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
      });
    });
  
  });