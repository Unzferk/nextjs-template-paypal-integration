import { CheckoutPaymentIntent } from "@paypal/paypal-server-sdk";

export const clientCartExample = {
  body: {
    intent: CheckoutPaymentIntent.Capture,
    purchaseUnits: [
      {
        amount: {
          currencyCode: "USD",
          value: "100",
          breakdown: {
            itemTotal: {
              currencyCode: "USD",
              value: "100",
            },
          },
        },
        items: [
          {
            name: "T-Shirt",
            unitAmount: {
              currencyCode: "USD",
              value: "100",
            },
            quantity: "1",
            description: "Super Fresh Shirt",
            sku: "sku01",
          },
        ],
      },
    ],
  },
  prefer: "return=minimal",
};
