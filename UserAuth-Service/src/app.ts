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
    const port = process.env.PORT || 3001;

    // JSON
    app.use(express.json());
    // ROUTER
    app.use(router);

    // 404 - API NOT FOUND
    app.use('/', (req, res) => {
      console.log(req.path);
      res.status(404).send(`API ${req.path} - Endpoint not found!`);
    });

    app.listen(port, () => console.log(`API UserAuth Service is running on port http://localhost:${port}`));
  })
  .catch((err) => console.log(err));
