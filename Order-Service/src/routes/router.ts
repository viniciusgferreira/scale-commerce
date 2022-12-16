import { Router } from "express";
import { addOrder, editOrder, listOrderById, listOrders, removeOrder } from "../controllers/order-controller";

export const router = Router();

router.get('/orders', listOrders);

// GET USER INFO by ID
router.get('/orders/:id', listOrderById);


// ADD ORDER
router.post('/orders', addOrder);

// EDIT ORDER INFO
router.put('/orders', editOrder);

// DELETE USER
router.delete('/orders/:id', removeOrder);
