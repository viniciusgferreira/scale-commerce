import { Request, Response } from "express";
import { User } from "../models/User";
import { deleteUser } from "../services/deleteUser";
import { getUserById } from "../services/getUserById";
import { getUsers } from "../services/getUsers";
import { setUser } from "../services/setUser";
import { updateUser } from "../services/updateUser";

// LIST ALL USERS - GET
export async function listUsers(req: Request, res: Response) {
  const allUsers = await getUsers();
  res.json(allUsers);
}

// LIST USER BY ID - GET
export async function listUserById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await getUserById(id);
  !user ? res.status(400).send('user not found') : res.json(user)
}

// ADD USER - POST
export async function addUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const newUser = await setUser({ username, password });
  !newUser ? res.status(500).send('user not created') : res.json(newUser);
}

// EDIT USER - PUT
export async function editUser(req: Request, res: Response) {
  const { username, password, id } = req.body;
  await updateUser(id, { username, password });
  res.status(204).end();
}

// DELETE USER - DELETE
export async function removeUser(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteUser(id);
  !result ? res.status(400).send('user not found') : res.status(204).end();
}