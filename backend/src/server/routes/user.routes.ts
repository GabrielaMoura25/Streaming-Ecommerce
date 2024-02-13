import { Router } from 'express';

import {
  createUser,
  getAllUsers,
  deleteUserById,
  updateUserById
} from '../controllers/User';

const router: Router = Router();

router.route('/').post(createUser).get(getAllUsers);

router.route('/:id')
  .put(updateUserById)
  .delete(deleteUserById);

export default router;