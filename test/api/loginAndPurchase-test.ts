
describe("Login And Purchase", () => {

  const agent = require('superagent');
  const StatusCodes = require('http-status-codes');
  const chai1 = require('chai');
  const expect = chai1.expect;
  //let customerTestId;
  //let customerName;
  it("Create customer", async () => {
    const response = await agent.post("http://localhost:8080/api/customer/")
      .send({
        customerId: 1,
        name: "Sally Vallery",
        address: "144 Townsend, San Francisco 99999",
        email: "sally@example.com",
        phone: "513 222 5555",
        username: "sallyv",
        password: "sallypassword",
        enabled: "true",
        role: "USER",
      })
      .set("Content-type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).to.equal(StatusCodes.CREATED);
    expect(response.body).to.have.property("customerId");
    //customerTestId = response.body.customerId; ///User Id
    //customerName = response.body.name; ///User Name
  });

  let token;
  it("Login", async () => {
    const response = await
      agent.post(`http://localhost:8080/login/`)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
          username: "sallyv",
          password: "sallypassword",
        });
    token = response.body.token;
    expect(response.status).to.equal(StatusCodes.OK);
  });

  it("Purchase", async () => {
    const response = await
      agent.get("http://localhost:8080/purchase/")
        .set("Content-type", "application/json")
        .set("Accept", "application/json")
        .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property("message");
  });

  it("Delete all customers in system", async () => {
    const response = await
      agent.del(`http://localhost:8080/api/customer/`)
        .set("User-Agent", "agent")
        .set("Content-Type", "application/json");
    expect(response.status).to.equal(StatusCodes.NO_CONTENT);
  });
});
