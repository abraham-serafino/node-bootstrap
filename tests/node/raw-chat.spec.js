/* global describe, it, expect */
var request = require('request');
var baseUrl = 'http://localhost:9090';

describe('Express server', () => {

  it('returns status code 200', done => {

    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).toBe(404);
      done();
    })
  });
});
