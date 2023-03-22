
  const request = require('supertest');
  const app = require('../app');
  const dbConnection = require('../database/db_connection');
  const currentNumberOfPersonnel = dbConnection().length;

  describe("GET / ", () => {
    test("The response should be an array with existing personnel", async () => {
      const response = await request(app).get("/personnel");
      expect(response.body).toHaveLength(currentNumberOfPersonnel); 
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST / ", () => {
    test("An employee should be added to the array if there is no already existing employee with the given name, last name and email", async () => {
      const response = await request(app).post("/personnel").send({name: 'name', lastName: 'lastName', email: 'email'});
      expect(response.body.result).toContainEqual({id: 4, name: 'name', lastName: 'lastName', email: 'email'});
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(201); 
    });
  });

  describe("POST / ", () => {
    test("An employee should be added to the array even if there already is an employee with the given name, but no one with given email", async () => {
      const response = await request(app).post("/personnel").send({name: 'name1', lastName: 'lastName1', email: 'email4'});
      expect(response.body.result).toContainEqual({id: 5, name: 'name1', lastName: 'lastName1', email: 'email4'});
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(201); 
    });
  });

  describe("POST / ", () => {
    test("An employee should not be added to the array if there already is an employee with the given email, even if the name does not exist in the array", async () => {
      const response = await request(app).post("/personnel").send({name: 'name4', lastName: 'lastName4', email: 'email1'});
      expect(response.body.result).not.toContainEqual({id: 6, name: 'name4', lastName: 'lastName4', email: 'email1'});
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(409); 
    });
  });

  describe("POST / ", () => {
    test("If name, last name or email is not given, no employee will be added", async () => {
      const response = await request(app).post("/personnel").send({lastName: 'lastName4', email: 'email1'});
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(400); 
    });
  });

  describe("DELETE / ", () => {
    test("An employee should be deleted if there is an employee with the given id", async () => {
      const response = await request(app).delete("/api/personnel/1");
      expect(response.body.result).not.toContainEqual({name: 'name1', lastName: 'lastName1', email: 'email1'});
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(200); 
    });
  });

  describe("DELETE / ", () => {
    test("An employee should not be deleted if there is no employee with the given id", async () => {
      const response = await request(app).delete("/api/personnel/7");
      expect(response.body.result).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(404); 
    });
  });