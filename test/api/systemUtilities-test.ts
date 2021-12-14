describe("System utilities Tests", () => {
  const agent = require('superagent');
  const StatusCodes = require('http-status-codes');
  const chai1 = require('chai');
  const expect = chai1.expect;
  it("Database healtcheck", async () => {
    const response = await agent.get("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/utility/healthcheck/")
      .set("Content-type", "application/json")
      .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property("status");
  });

  it("Getting container ID using GET", async () => {
    const response = await agent.get("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/utility/containerid/")
      .set("Content-type", "application/json")
      .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property("host");
    expect(response.body).to.have.property("ip");
  });
});
