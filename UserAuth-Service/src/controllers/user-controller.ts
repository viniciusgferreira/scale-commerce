import { Request, Response } from "express";
import { User } from "../models/User";
import { getUserById } from "../services/getUserById";
import { getUsers } from "../services/getUsers";
import { setUser } from "../services/setUser";

export async function listUsers(req: Request, res: Response) {
  const allUsers = await getUsers();
  res.json(allUsers);
}

export async function listUserById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await getUserById(id);
  res.json(user);
}

export async function addUser(req: Request, res: Response) {
  const { username, password } = req.body;
  const newUser = await setUser({ username, password });
  res.json(newUser);
}
