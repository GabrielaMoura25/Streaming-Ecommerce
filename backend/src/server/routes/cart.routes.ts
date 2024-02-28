import { Router } from 'express';

import {
  createCart,
  deleteCartById,
  getAllCarts,
  updateCartById
} from '../controllers/Cart';
import stripePayments from '../controllers/Stripe';

const router: Router = Router();

router.route('/payment').post(stripePayments);

router.route('/').post(createCart).get(getAllCarts);

router.route('/:id')
  .put(updateCartById)
  .delete(deleteCartById);

export default router;