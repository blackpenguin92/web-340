const http = require('http');
const server = require('../src/server');

// tests here
const makeRequest = (options, callback) => {
  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => callback(res, data));
  });
  req.end();
};

describe('Fantasy Character Creation API', () => {
  afterAll(() => {
    server.close();
  });

  // create actual dnd class | race/gender | language
  test('POST /create should return a created character', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=Hexblade%20Warlock&gender=Shadar-Kai&funFact=can%20speak%20Abyssal',
      method: 'POST'
    };

    makeRequest(options, (res, data) => {
      expect(res.statusCode).toBe(200);
      const body = JSON.parse(data);
      expect(body.message).toBe('Character created');
      expect(body.character).toEqual({
        class: 'Hexblade Warlock',
        gender: 'Shadar-Kai', // using race instead of gender but still works
        funFact: 'can speak Abyssal'
      });
      done();
    });
  });

  // confirm character
  test('POST /confirm should return confirmation', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST'
    };

    makeRequest(options, (res, data) => {
      expect(res.statusCode).toBe(200);
      const body = JSON.parse(data);
      expect(body.message).toBe('Character confirmed!');
      done();
    });
  });

  // view character
  test('GET /view should return the created character', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/view',
      method: 'GET'
    };

    makeRequest(options, (res, data) => {
      expect(res.statusCode).toBe(200);
      const character = JSON.parse(data);
      expect(character.class).toBe('Hexblade Warlock');
      expect(character.gender).toBe('Shadar-Kai');
      expect(character.funFact).toBe('can speak Abyssal');
      done();
    });
  });
});
