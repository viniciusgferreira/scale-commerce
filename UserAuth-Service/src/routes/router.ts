import { Router } from "express";

export const router = Router();
const servicePath = '/userauth';

// GET USER INFO
router.get(servicePath + '/users', (req, res) => {
  res.send('OK users GET');
});

// ADD USER
router.post(servicePath + '/users', (req, res) => {
  res.send('OK users POST');
});

// EDIT USER INFO
router.put(servicePath + '/users', (req, res) => {
  res.send('OK users put');
});
