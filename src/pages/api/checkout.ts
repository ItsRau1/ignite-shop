import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { priceID } = req.body

    if(req.method !== "POST") {
        return res.status(405).json({ error : "Method Not Allowed" });
    }

    if (!priceID){
        return res.status(400).json({ error : "Price Not Found"})
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        cancel_url: cancelUrl,
        success_url: successUrl,
        mode: "payment",
        line_items: [
            {
                price: priceID,
                quantity: 1,
            },
        ],
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}