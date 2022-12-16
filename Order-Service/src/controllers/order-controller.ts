import { Request, Response } from "express";
import { Order } from "../models/Order";
import { getOrderById } from "../services/getOrderById";
import { getOrders } from "../services/getOrders";
import { setOrder } from "../services/setOrder";
import { updateOrder } from "../services/updateOrder";
import { deleteOrder } from "../services/deleteOrder"


// LIST ALL ORDERS - GET
export async function listOrders(req: Request, res: Response) {
  const allOrders = await getOrders();
  res.json(allOrders);
}

// LIST ORDER BY ID - GET
export async function listOrderById(req: Request, res: Response) {
  const { id } = req.params;
  const order = await getOrderById(id);
  !order ? res.status(400).send('order not found') : res.json(order)
}

// ADD ORDER - POST
export async function addOrder(req: Request, res: Response) {
  const { user, totalPrice, products } = req.body;
  const newOrder = await setOrder({ user, totalPrice, products });
  !newOrder ? res.status(500).send('order not created') : res.json(newOrder);
}

// EDIT ORDER - PUT
export async function editOrder(req: Request, res: Response) {
  const { id, user, totalPrice, products } = req.body;
  const editedOrder = await updateOrder(id, { user, totalPrice, products });
  !editedOrder ? res.status(500).send('order not edited') : res.json(editedOrder);
}

// DELETE ORDER - DELETE
export async function removeOrder(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteOrder(id);
  !result ? res.status(400).send('order not found') : res.status(204).end();
}
