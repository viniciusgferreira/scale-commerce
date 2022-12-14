import { Router } from "express";
//import { listUsers, listUserById, addUser, editUser, removeUser } from "../controllers/user-controller";

export const router = Router();

router.get('/orders', (req, res) => {
    res.send('Order service ok');
});

/* // GET USER INFO by ID
router.get('/users/:id', listUserById);

// GET USERS
router.get('/users', listUsers);

// ADD USER
router.post('/users', addUser);

// EDIT USER INFO
router.put('/users', editUser);

// DELETE USER
router.delete('/users/:id', removeUser); */
