const agent = require('superagent');
const StatusCodes = require('http-status-codes');
const chai1 = require('chai');

describe("Customer tests", () => {
  let customerTestId;
  let customerName;
  it("Create customer", async () => {
    const response = await agent.post("http://localhost:8080/api/customer/")
      .send({
        customerId: 0,
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

    chai1.expect(response.status).to.equal(StatusCodes.CREATED);
    chai1.expect(response.body).to.have.property("customerId");
    customerTestId = response.body.customerId; 
    customerName = response.body.name;
  });

  it("Get customer by Id", async () => {
    const id = customerTestId;
    const response = await agent.get("http://localhost:8080/api/customer/" + id)
      .set("Content-type", "application/json")
      .set("Accept", "application/json");
    chai1.expect(response.status).to.equal(StatusCodes.OK);
    chai1.expect(response.body).to.have.property("customerIf"); 
    chai1.expect(response.body).to.have.property("name");
    chai1.expect(response.body).to.have.property("username");
  });

  it("Get customer by name", async () => {
    it("A costumer must be show", async () => {
      const response = await agent.get(
        "http://localhost:8080/api/customer/username=" + customerName
      )
        .set("User-Agent", "agent") 
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");
      chai1.expect(response.status).to.equal(StatusCodes.OK);
      chai1.expect(response.body).to.have.property("name");
      chai1.expect(response.body.name).to.equal(customerName);
    });
  });

  it("Get Customer by Username", async () => {
    const username = "sallyv"; 
    const response = await agent.get(
      "http://localhost:8080/api/customer/username=" + username
    )
      .set("Content-type", "application/json")
      .set("Accept", "application/json");
    chai1.expect(response.status).to.equal(StatusCodes.OK);
    chai1.expect(response.body).to.have.property("username");
    chai1.expect(response.body).to.have.property("customerIf");
  });

  it("Update customer", async () => {
    it("The correct costumer should be update", async () => {
      const customer = {
        customerId: customerTestId,
        name: "Sally Vallery",
        address: "Arcane street",
        email: "jinxed@XD.com",
        phone: "32467991632",
        username: "definitelynotjinx",
        password: "wtfjinx",
        enabled: "true",
        role: "USER",
      };

      const response = await agent.put(
        "http://localhost:8080/api/customer/" + customerTestId
      )
        .set("Content-type", "application/json")
        .set("Accept", "application/json")
        .send(customer);
      chai1.expect(response.status).to.equal(StatusCodes.OK);
      chai1.expect(response.body).to.have.property("customerId");
      chai1.expect(response.body.address).to.equal(customer.address);
      chai1.expect(response.body.address).to.equal(customer.email);
      chai1.expect(response.body.phone).to.equal(customer.phone);
      chai1.expect(response.body.address).to.equal(customer.username);
      chai1.expect(response.body.password).to.equal(customer.password);
    });
  });

  it("Delete customer by Id", async () => {
    const id = customerTestId; 
    const response = await agent.del("http://localhost:8080/api/customer/" + id) 
      .set("Content-type", "application/json")
      .set("Accept", "application/json");
    chai1.expect(response.status).to.equal(StatusCodes.NO_CONTENT);
  });

  it("Delete all customers in system", async () => {
    const response = await agent.del(`http://localhost:8080/api/customer/`)
      .set("User-Agent", "agent")
      .set("Content-Type", "application/json");
    chai1.expect(response.status).to.equal(StatusCodes.NO_CONTENT);
  });
});
