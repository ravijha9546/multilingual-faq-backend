const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const FAQ = require('../models/FAQ');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API', () => {
  beforeEach(async () => {
    await FAQ.deleteMany({});
  });

  it('should create a new FAQ', (done) => {
    chai.request(app)
      .post('/api/faqs')
      .send({
        question: 'What is Node.js?',
        answer: 'JavaScript runtime'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        done();
      });
  });
});