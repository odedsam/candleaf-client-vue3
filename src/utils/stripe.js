import { loadStripe } from '@stripe/stripe-js';
export var stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
