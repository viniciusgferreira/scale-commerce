import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/router';

//DB CREDENTIALS
const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASS;

// MONGODB CONNECTION
const MONGO_NAME_STR = "mongodb://localhost:27017";

mongoose.connect(MONGO_NAME_STR)
  .then(() => {
    console.log('Conectado ao MongoDB');

    // Create express server
    const app = express();
    const port = process.env.PORT || 3002;

    // JSON
    app.use(express.json());

    // ROUTER
    app.use('/order-service', router);

    app.listen(port, () => console.log(`API Order Service is running on port http://localhost:${port}`));
  })
  .catch((err) => console.log(err));
