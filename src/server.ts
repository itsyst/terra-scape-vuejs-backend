import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const CORS_URL = process.env.CORS_URL || '*'; // Fallback to allow all origins
const PAYPAL_URL = process.env.PAYPAL_URL; // Sandbox API
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_SECRET;

// Ensure required PayPal env variables are available
if (!PAYPAL_URL || !CLIENT_ID || !SECRET) {
    console.error('Missing required PayPal environment variables.');
    process.exit(1);
}

const app = express();
app.use(cors({ origin: CORS_URL })); // Allow requests from your frontend's origin (or use '*' for all origins)
app.use(express.json());
 
// Get PayPal Access Token
const getAccessToken = async () => {
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');
    const response = await axios.post(
        `${PAYPAL_URL}/v1/oauth2/token`,
        'grant_type=client_credentials',
        {
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );
    return response.data.access_token;
};

// Create PayPal Order
app.post('/api/paypal/create-order', async (req, res) => {
    try {
        const { price, currency } = req.body;
        const accessToken = await getAccessToken();

        const order = await axios.post(
            `${PAYPAL_URL}/v2/checkout/orders`,
            {
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: currency,
                            value: price.toFixed(2),
                        },
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json(order.data);
    } catch (error) {
        console.error('Error creating PayPal order:', error);
        res.status(500).send('Server error');
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
