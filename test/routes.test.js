
  const request = require('supertest');
  const app = require('../app');
  const currentNumberOfPersonnel = 3; 


  describe("GET / ", () => {
    test("The response should be an array with existing personnel", async () => {
      const response = await request(app).get("/api/personnel/get_personnel");
      expect(response.body).toHaveLength(currentNumberOfPersonnel); //global variabel 
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST / ", () => {
    test("An employee should be added to the array if there is no already existing employee with the given name, last name and email", async () => {
      const response = await request(app).post("/api/personnel/add_personnel").send({name: 'name', lastName: 'lastName', email: 'email'});
      expect(response.body).toContainEqual({name: 'name', lastName: 'lastName', email: 'email'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(201); 
    });
  });

  describe("POST / ", () => {
    test("An employee should be added to the array even if there already is an employee with the given name, but no one with given email", async () => {
      const response = await request(app).post("/api/personnel/add_personnel").send({name: 'name1', lastName: 'lastName1', email: 'email4'});
      expect(response.body).toContainEqual({name: 'name1', lastName: 'lastName1', email: 'email4'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(201); 
    });
  });

  describe("POST / ", () => {
    test("An employee should not be added to the array if there already is an employee with the given email, even if the name does not exist in the array", async () => {
      const response = await request(app).post("/api/personnel/add_personnel").send({name: 'name4', lastName: 'lastName4', email: 'email1'});
      expect(response.body).not.toContainEqual({name: 'name4', lastName: 'lastName4', email: 'email1'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(405); 
    });
  });

  describe("POST / ", () => {
    test("If name, last name or email is not given, status code 400 will be sent and no employee will be added", async () => {
      const response = await request(app).post("/api/personnel/add_personnel").send({lastName: 'lastName4', email: 'email1'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+2);
      expect(response.statusCode).toBe(400); 
    });
  });

  describe("DELETE / ", () => {
    test("An employee should be deleted if there is an employee with the given name, last name and email", async () => {
      const response = await request(app).delete("/api/personnel/delete_personnel").send({name: 'name1', lastName: 'lastName1', email: 'email1'});
      expect(response.body).not.toContainEqual({name: 'name1', lastName: 'lastName1', email: 'email1'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(410); 
    });
  });

  describe("DELETE / ", () => {
    test("An employee should not be deleted if there is an employee with the given email, but the name and last name does not concur with the given info", async () => {
      const response = await request(app).delete("/api/personnel/delete_personnel").send({name: 'name5', lastName: 'lastName5', email: 'email1'});
      expect(response.body).not.toContainEqual({name: 'name5', lastName: 'lastName5', email: 'email1'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(405); 
    });
  });

  describe("DELETE / ", () => {
    test("An employee should not be deleted if there is no employee with the given email", async () => {
      const response = await request(app).delete("/api/personnel/delete_personnel").send({name: 'name5', lastName: 'lastName5', email: 'email1'});
      expect(response.body).not.toContainEqual({email: 'email1'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(405); 
    });
  });

  describe("DELETE / ", () => {
    test("If name, last name or email is not given, status code 400 will be sent and no employee will be deleted", async () => {
      const response = await request(app).delete("/api/personnel/delete_personnel").send({lastName: 'lastName2', email: 'email2'});
      expect(response.body).toHaveLength(currentNumberOfPersonnel+1);
      expect(response.statusCode).toBe(400); 
    });
  });