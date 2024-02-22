const http = require('https');

const options = {
  method: 'GET',
  hostname: 'api.yelp.com',
  port: null,
  path: '/v3/businesses/search?location=Cincinnati&sort_by=best_match&limit=20',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer LBJnb11wvWywhMNESrto75UtjlVXD4pzRQtVo2AjLAZ0sMxdsrZcRLHnIOXId7ANvJnwbBJ4elFFdlHzPePIFKZdPRTpWiSaL5nMCksnCx7KwZBnSNenOHNH1lHVZXYx'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();