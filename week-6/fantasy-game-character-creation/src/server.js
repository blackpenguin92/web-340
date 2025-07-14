const http = require('http');
const url = require('url');

// creat character in memory
let createdCharacter = null;

const server = http.createServer((req, res) => {
  // Parse the URL and extract the pathname and query parameters
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // Route 1: POST /create a character
  if (req.method === 'POST' && pathname === '/create') {
    let body = '';

    // Listen for incoming data
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // receive all data
    req.on('end', () => {
      const charClass = query.class;
      const gender = query.gender;
      const funFact = query.funFact;

      // Validate or return error message
      if (!charClass || !gender || !funFact) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing character information' }));
        return;
      }

      // Store the character in memory
      createdCharacter = {
        class: charClass,
        gender,
        funFact
      };

      // Respond with success and the character data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character created', character: createdCharacter }));
    });
  }

  // Route 2: POST /confirm the character
  else if (req.method === 'POST' && pathname === '/confirm') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      if (!createdCharacter) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No character to confirm' }));
        return;
      }

      // confirmation message
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character confirmed!' }));
    });
  }

  // Route 3: GET /view the character
  else if (req.method === 'GET' && pathname === '/view') {
    // If no character has been created yet | return error message
    if (!createdCharacter) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Character not found' }));
      return;
    }

    // otherwise return stored character
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(createdCharacter));
  }

  // incase of unknown paths or methods
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;
