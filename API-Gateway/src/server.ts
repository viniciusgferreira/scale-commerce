import express, { Request } from 'express';
import httpProxy from 'express-http-proxy';


//API GATEWAY
const app = express();
const port = process.env.PORT || 3000;

// SERVICES PORTS
const userAuthService = 3001;
const ordersService = 3002;

// Test Request Uri
function redirectToService(req: Request) {
  console.log('New request at ' + req.path);
  if (req.path.startsWith('/userauth')) return `http://localhost:${userAuthService}/`;
  else if (req.path.startsWith('/orders')) return `http://localhost:${ordersService}/`;
  return 'http://localhost:3000/';
}



//REDIRECTION
app.use('/api/', (req, res, next) => {
  httpProxy(redirectToService(req))(req, res, next);
});

// 404 - API NOT FOUND
app.use('/', (req, res) => {
  res.status(404).send('API Endpoint not found');
});

app.listen(port, () => {
  console.log(`API Gateway server is running on port http://localhost:${port}`);
});
