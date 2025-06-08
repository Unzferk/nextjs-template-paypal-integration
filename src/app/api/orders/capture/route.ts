import { ApiError } from "@paypal/paypal-server-sdk";
import { ordersController } from "../route";
import { NextRequest, NextResponse } from "next/server";

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID: any) => {
  const collect = {
    id: orderID,
    prefer: "return=minimal",
  };

  try {
    const { body, ...httpResponse } = await ordersController.captureOrder(
      collect
    );
    return {
      jsonResponse: JSON.parse(String(body)),
      httpStatusCode: httpResponse.statusCode,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(error.message);
    }
  }
};

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json();

    if (!orderID) {
      throw new Error("orderID has not being provided");
    }

    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    if (httpStatusCode !== 201) {
      throw new Error(
        "something happes capturing your order, status: " + httpStatusCode
      );
    }
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Failed to capture order:", error);
    return NextResponse.json(
      { error: "Failed to capture order." },
      { status: 500 }
    );
  }
}
