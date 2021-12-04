import  get  from 'superagent';
import  ajax  from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

describe('Customer tests', () => {
    it('Create customer', async () => {
        const response = await ajax.post('http://localhost:8080/api/customer/')
            .send({
                "customerId" : 1,
                "name"       : "Sally Vallery",
                "address"    : "144 Townsend, San Francisco 99999",
                "email"      : "sally@example.com",
                "phone"      : "513 222 5555",
                "username"   : "sallyv",
                "password"   : "sallypassword",
                "enabled"    : "true",
                "role"       : "USER"
            })
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.CREATED);
    });
    
    it('Get customer by Id', async () => {
        const id = 1;   
        const response = await get('http://localhost:8080/api/customer/'+id)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('customerIf');   //this is misspelled in the API
    });
    
    it('Get customer by name', async () => {
        //Aquí va el test
    });

    it('Get Customer by Username', async () => {
        const username = "sallyv";   
        const response = await get('http://localhost:8080/api/customer/username='+username)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.OK);
        expect(response.body).to.have.property('username');
    });

    it('Update customer', async () => {
        //Aquí va el test
    });

    it('Delete customer by Id', async () => {
        const id = 1;
        const response = await ajax.del('http://localhost:8080/api/customer/'+id)
            .set('Content-type','application/json')
            .set('Accept','application/json');
        expect(response.status).to.equal(StatusCodes.NO_CONTENT);
    });

    it('Delete all Customers', async () => {
        //Aquí va el test
    });

});