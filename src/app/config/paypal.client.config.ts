// import {
//   //   ApiError,
//   //   CheckoutPaymentIntent,
//   Client,
//   Environment,
//   LogLevel,
//   OrdersController,
//   PaymentsController,
//   //   PaypalExperienceLandingPage,
//   //   PaypalExperienceUserAction,
//   //   ShippingPreference,
// } from "@paypal/paypal-server-sdk";

export const paypalProviderInitialOpts = {
  clientId:
    "AT3v8NWwna2__6jed4k6xLr6llAUx4nLgWwM5b8n--TesrRj7c8ViBMc8VU45fBMxVlwZ7podq5fWbwE",
  enableFunding: "venmo",
  disableFunding: "",
  buyerCountry: "US",
  currency: "USD",
  dataPageType: "product-details",
  components: "buttons",
  dataSdkIntegrationSource: "developer-studio",
};

// const {
//   PAYPAL_CLIENT_ID,
//   PAYPAL_CLIENT_SECRET,
//   //PORT = 8080,
// } = process.env;
// console.log("ID: " + PAYPAL_CLIENT_ID);
// console.log("SEXRET: " + PAYPAL_CLIENT_SECRET);
// const client = new Client({
//   clientCredentialsAuthCredentials: {
//     oAuthClientId: PAYPAL_CLIENT_ID || "",
//     oAuthClientSecret: PAYPAL_CLIENT_SECRET || "",
//   },
//   timeout: 0,
//   environment: Environment.Sandbox,
//   logging: {
//     logLevel: LogLevel.Info,
//     logRequest: { logBody: true },
//     logResponse: { logHeaders: true },
//   },
// });

// export const ordersController = new OrdersController(client);
// export const paymentsController = new PaymentsController(client);
