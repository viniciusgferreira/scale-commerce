import { Router } from "express";
import { addOrder, listOrderById, listOrders } from "../controllers/order-controller";

export const router = Router();

router.get('/orders', listOrders);

// GET USER INFO by ID
router.get('/orders/:id', listOrderById);

// GET USERS
//router.get('/users', listUsers);

// ADD USER
router.post('/orders', addOrder);

// EDIT USER INFO
//router.put('/users', editUser);

// DELETE USER
//router.delete('/users/:id', removeUser); * /
