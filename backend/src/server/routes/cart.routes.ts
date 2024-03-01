import { Router } from 'express';

import {
  createCart,
  deleteCartById,
  getAllCarts,
  updateCartById
} from '../controllers/Cart';
import stripePayments from '../controllers/Stripe';

const router: Router = Router();

router.post('/payment', stripePayments);
router.get('/', getAllCarts);
router.post('/', createCart);
router.put('/:id', updateCartById);
router.delete('/:id', deleteCartById);


export default router;