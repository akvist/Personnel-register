
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