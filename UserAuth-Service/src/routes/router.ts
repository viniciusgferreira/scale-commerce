import { Router } from "express";
import { listUsers, listUserById, addUser, editUser } from "../controllers/user-controller";

export const router = Router();
const servicePath = '/userauth';

// GET USER INFO by ID
router.get(servicePath + '/users/:id', listUserById);

// GET USERS
router.get(servicePath + '/users', listUsers);

// ADD USER
router.post(servicePath + '/users', addUser);

// EDIT USER INFO
router.put(servicePath + '/users', editUser);
