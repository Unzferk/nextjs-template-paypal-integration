//import { ordersController } from "@/app/config/paypal.config";
import {
  ApiError,
  //CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  //OrderRequest,
  //OrderRequest,
  OrdersController,
  PaymentsController,
} from "@paypal/paypal-server-sdk";
import { NextResponse, NextRequest } from "next/server";

const {
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  //PORT = 8080,
} = process.env;
//console.log("ID: " + PAYPAL_CLIENT_ID);
//console.log("SEXRET: " + PAYPAL_CLIENT_SECRET);
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID || "",
    oAuthClientSecret: PAYPAL_CLIENT_SECRET || "",
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: { logBody: true },
    logResponse: { logHeaders: true },
  },
});

export const ordersController = new OrdersController(client);
export const paymentsController = new PaymentsController(client);

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart: any) => {
  try {
    const { body, ...httpResponse } = await ordersController.createOrder(cart);
    const { statusCode } = httpResponse;
    if (statusCode != 201) {
      throw new Error(
        `Something happens creating the order, status: ${statusCode}`
      );
    }
    return {
      jsonResponse: JSON.parse(body),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(error.message);
    }
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export async function POST(request: NextRequest) {
  try {
    const cart = await request.json();

    if (!cart) {
      throw new Error("your cart is emtpy");
    }
    console.log("MYCART: ", JSON.stringify(cart));
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    //console.log("ORDER RESPONSE", JSON.stringify(jsonResponse));
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("ERROR - Failed to create order:", error);
    return NextResponse.json({ error });
  }
}
