import setupServer from "../setup/setupServer";
import supertest from "supertest";
import { beforeAll, afterEach, afterAll } from 'vitest';
const app = setupServer();

// create the server and request objects
let server, request;

// start the server before the tests run
beforeAll(async () => {
    server = app.listen(0);
    request = supertest(app);
});

// after tests run, close tests
afterAll(async () => {
    server.close(); 
})

export { request };