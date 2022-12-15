import { Request, Response } from "express";
import { Order } from "../models/Order";
import { getOrderById } from "../services/getOrderById";
import { getOrders } from "../services/getOrders";
import { setOrder } from "../services/setOrder";



// LIST ALL USERS - GET
export async function listOrders(req: Request, res: Response) {
  const allOrders = await getOrders();
  res.json(allOrders);
}

// LIST USER BY ID - GET
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
/*
// EDIT USER - PUT
export async function editUser(req: Request, res: Response) {
  const { username, password, id, role } = req.body;
  const editedUser = await updateUser(id, { username, password, role });
  !editedUser ? res.status(500).send('user not edited') : res.json(editedUser);
}

// DELETE USER - DELETE
export async function removeUser(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteUser(id);
  !result ? res.status(400).send('user not found') : res.status(204).end();
}
 */
