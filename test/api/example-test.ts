

describe('First Api Tests', () => {
  const agent = require('superagent');
  const StatusCodes = require('http-status-codes');
  const chai1 = require('chai');
  const expect = chai1.expect;
  it('Consume GET Service', async () => {
    const response = await agent.get('http://httpbin.org/ip');

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property('origin');
  });
});
