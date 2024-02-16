import { Router } from 'express';

import validateToken from '../middlewares/validateToken';

import {
  createUser,
  getAllUsers,
  deleteUserById,
  updateUserById
} from '../controllers/User';

const router: Router = Router();

router.route('/').post(createUser).get(getAllUsers);

router.route('/:id')
  .put(validateToken, updateUserById)
  .delete(validateToken, deleteUserById);

export default router;