import { Router } from "express";

export const router = Router();

// ADD USER
router.post('/userauth/users', (req, res) => {
  res.send('OK');
});

// GET USER INFO
router.get('/userauth/users', (req, res) => {
  res.send('OK');
});
