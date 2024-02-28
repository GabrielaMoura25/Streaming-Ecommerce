import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Stripe from 'stripe';
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const stripePayments = async (req: Request, res: Response) => {
  const { amount, token } = req.body;

  try {
    const change: Stripe.PaymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'brl',
      payment_method: token.id,
      description: 'Testando stripe',
    });

    console.log(change);

    res.status(StatusCodes.CREATED).json({
      message: 'Pagamento realizado com sucesso!', change
    });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when making payment',
      error: error.errors
    });
  }
}

export default stripePayments;