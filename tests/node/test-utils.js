/* eslint global-require: "off", import/no-unresolved: "off" */
module.exports = {

  createTestServer() {
    delete require.cache[require.resolve('../../build/server/__node_Bootstrap_Internals/__server')];
    return require('../../build/server/__node_Bootstrap_Internals/__server')(/* port = */ 9001);
  },

  TEST_SERVER_BASE_URL: 'http://localhost:9001',
};
