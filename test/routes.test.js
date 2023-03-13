
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