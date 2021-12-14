

describe('Products', () => {
  const agent = require('superagent');
  const StatusCodes = require('http-status-codes');
  const chai1 = require('chai');
  const expect = chai1.expect;
  it('Getting all products', async () => {
    const response = await agent.get('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/product/')
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json');
    expect(response.status).to.equal(StatusCodes.OK);
  });

  it('Getting single product by ID', async () => {
    const id = 1;
    const response = await agent.get('http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/product/' + id)
      .set('Content-type', 'application/json')
      .set('Accept', 'application/json');
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property('description');
    expect(response.body).to.have.property('name');
    expect(response.body).to.have.property('productId');
  });
});
