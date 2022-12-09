import express, { Request } from 'express';
import httpProxy from 'express-http-proxy';


//API GATEWAY
const app = express();
const port = process.env.PORT || 3000;

// SERVICES PORTS
const userAuthServicePort = 3001;
const ordersServicePort = 3002;


// Test Request Uri
function redirectToService(req: Request) {
  console.log('New request at ' + req.path);
  if (req.path.startsWith('/user-service')) {
    return `http://localhost:${userAuthServicePort}/api${req.path}`;
  }
  else if (req.path.startsWith('/order-service')) {
    return `http://localhost:${ordersServicePort}/api/${req.path}`;
  }
  return 'http://localhost:3000/';
}



//REDIRECTION
app.use('/api', (req, res, next) => {
  httpProxy(redirectToService(req))(req, res, next);
});

app.listen(port, () => {
  console.log(`API Gateway server is running on port http://localhost:${port}`);
});
