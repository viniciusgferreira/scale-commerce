import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3001;

// 404 - API NOT FOUND
app.use('/', (req, res) => {
  res.status(404).send('API UserAuth - Endpoint not found!');
});

//DB CREDENTIALS
const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASS;

// MONGODB CONNECTION
const MONGO_NAME_STR = "mongodb://mongo:27017";

mongoose.connect(MONGO_NAME_STR)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`API UserAuth Service is running on port http://localhost:${port}`));

