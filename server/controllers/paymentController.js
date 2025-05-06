const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.verifyCard = async (req, res) => {
  const { name, payment_method_id } = req.body;
  try {
    const customer = await stripe.customers.create({
      name,
      payment_method: payment_method_id,
      invoice_settings: {
        default_payment_method: payment_method_id,
      },
    });

    await stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
      customer: customer.id,
      payment_method: payment_method_id,
      confirm: true,
      description: 'Card verification for CashyLink signup',
    });

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
