/* globals describe, it, expect, beforeEach, afterEach, before, after, spyOn, jasmine */
const request = require('request');
const testUtils = require('./test-utils');

describe('Express server', () => {
  let server;

  beforeEach(() => {
    server = testUtils.createTestServer();
  });

  it('returns status code 404', done => {
    request(testUtils.TEST_SERVER_BASE_URL, (error, response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  it('returns status code 404 (intentional duplicate)', done => {
    request(testUtils.TEST_SERVER_BASE_URL, (error, response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  afterEach(done => server.close(done));
});
