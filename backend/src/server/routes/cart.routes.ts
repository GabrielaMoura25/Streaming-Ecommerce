import { Router } from 'express';

import { createCart, deleteCartById, getAllCarts, updateCartById } from '../controllers/Cart';

const router: Router = Router();

router.route('/').post(createCart).get(getAllCarts);

router.route('/:id')
  .put(updateCartById)
  .delete(deleteCartById);

export default router;