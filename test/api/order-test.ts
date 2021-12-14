

describe("Order Tests", () => {

  const agent = require('superagent');
  const StatusCodes = require('http-status-codes');
  const chai1 = require('chai');
  const expect = chai1.expect;
  let orderTestId = 0;
  it("Create an order", async () => {
    const response = await
      agent.post("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/order/")
        .send({
          orderId: 1,
          orderDate: "2017-02-28T19:52:39Z",
          customerId: "54321",
          productsOrdered: { 1: 1, 2: 1, 3: 1 },
        })
        .set("Content-type", "application/json")
        .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.CREATED);
    expect(response.body).to.have.property("orderId");
    orderTestId = response.body.orderId;
  });

  it("Get all orders", async () => {
    const response = await
      agent.get("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/order/")
        .set("Content-type", "application/json")
        .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body.length).to.equal(1);
  });

  it("Get order by Id", async () => {
    const id = orderTestId;
    const response = await
      agent.get("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/order/" + id)
        .set("Content-type", "application/json")
        .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body).to.have.property("orderId");
    expect(response.body).to.have.property("customerId");
    expect(response.body).to.have.property("productsOrdered");
  });

  it("Update an order", async () => {
    it("The correct order should be update", async () => {
      const order = {
        orderId: 1,
        orderDate: "1996-01-28TI19:52:39Z",
        customerId: "123456789",
        productsOrdered: { 1: 3, 2: 4, 3: 2 },
      };

      const response = await agent.put(
        "http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/order/ " + order.orderId
      )
        .set("Content-type", "application/json")
        .set("Accept", "application/json")
        .send(order);
      expect(response.status).to.equal(StatusCodes.OK);
      expect(response.body).to.have.property("orderId");
      expect(response.body.address).to.equal(order.orderDate);
      expect(response.body.address).to.equal(order.customerId);
      expect(response.body.phone).to.equal(order.productsOrdered);
    });
  });

  it("Delete order by Id", async () => {
    const id = orderTestId;
    const response = await
      agent.del("http://ec2-3-144-243-225.us-east-2.compute.amazonaws.com:8080/api/order/" + id)
        .set("Content-type", "application/json")
        .set("Accept", "application/json");
    expect(response.status).to.equal(StatusCodes.NO_CONTENT);
  });
});
