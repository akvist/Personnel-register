# Personnel register

This is a REST API created with Node.js and express.

## Table of contents

- Introduction
- Scope of Functionalities
- Highlights
- Tech Stack
- API Reference
- Environmental variables
- Run Locally
- Running tests
- Author
- Links

## Introduction

This is a backend project, a REST API created with Node.js and express.

The API is a personnel register where you can get all personnel in the register, add an employee or remove an employee from the register. The project contains tests made with jest and supertest.

## Scope of functionalities

This project is a personnel register. The register is saved in memory and changes are thus not saved in between runnings. When starting the server, the register consists of three employees. The projects contains suitable tests.

You can:

- GET: Get all personnel from the register.
- POST: Add an employee to the register by entering the name, last name and email of the employee.
  - If name, last name or/and email is missing, the employee will not be added to the register.
  - An employee with an unique name, last name and email will be added to the register.
  - If there already is an employee with the same name or/and last name but a different email, they will be added to the register.
  - If there already is an employee with the given email, the employee will not be added to the register.
- DELETE: Remove an employee from the register by entering the id of the employee.
  - If the id does not exist, the employee will not be removed from the register.

Informative messages and status codes are sent for each response.

## Highlights

**Highlights of this project**:

- Creating RESTful API:s with express
- Managing git and GitHub
- Cathching errors
- Sending status codes and messages for responses
- Includes suitable tests
- Using environmental variables
- Managing the local scope, global scope and block scope of JavaScript
- Using body-parser
- Writing understandable code by naming of functions/variables and by structure of code
- The logic that only allows an employee with an unique email adress to be added, even if the name is the same as someone in the register
- Splitting the project into modules
- Writing commit messages
- Using dependency injection for database

## Tech Stack

**Server:** Node.js, Express

**Tests:** jest, supertest

## API Reference

#### Get all personnel

```http
  GET /personnel
```

#### Add an employee

```http
  POST /personnel
```

#### Remove an employee

```http
  DELETE /api/personnel/:id
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `number` | **Required**. Id of employee to remove. |

## Environment Variables

`PORT` the port that will be used. If no port is specified in .env, a port specified in server.js will be used.

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Running Tests

To run tests, run the following command

```bash
  npm test
```

## Author

- [@akvist](https://www.github.com/akvist)

## 🔗 Links

You can find me on LinkedIn:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amirakvist/)
