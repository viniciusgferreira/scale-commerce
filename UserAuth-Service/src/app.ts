import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

// 404 - API NOT FOUND
app.use('/', (req, res) => {
  res.status(404).send('API UserAuth - Endpoint not found');
});

app.listen(port, () => {
  console.log(`API UserAuth Service is running on port http://localhost:${port}`);
});
