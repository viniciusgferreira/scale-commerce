import express, { Request, Response } from 'express';
import httpProxy from 'express-http-proxy';


//API GATEWAY
const app = express();
const port = process.env.PORT || 3000;

// SERVICES PORTS
const userServicePort = 3001;
const ordersServicePort = 3002;

// Test Request Uri
function redirectToService(req: Request) {
  console.log('New request at ' + req.path);
  const serviceReq = req.path.split('/');

  switch (serviceReq[1]) {
    case 'user-service':
      return `http://localhost:${userServicePort}/api${req.path}`;
      break;
    case 'order-service':
      return `http://localhost:${ordersServicePort}/api/${req.path}`;
      break;
    default:
      console.log('Service URI not found');
      return null;
      break;
  }
}

//REDIRECTION
app.use('/api', (req, res, next) => {
  const uriCall = redirectToService(req);
  !uriCall ? res.status(404).json({ message: 'Service not found' }) : httpProxy(uriCall)(req, res, next);
});

app.listen(port, () => {
  console.log(`API Gateway server is running on port http://localhost:${port}`);
});
