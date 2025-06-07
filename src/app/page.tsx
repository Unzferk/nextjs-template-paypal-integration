"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalProviderInitialOpts } from "./config/paypal.client.config";
import { clientCartExample } from "./data/paypal-fake-data";
import usePaypalClient from "./hooks/usePaypalClient";

export default function Home() {
  const { onCreate, onApprove, setCart, message } = usePaypalClient();

  useEffect(() => {
    setCart(JSON.stringify(clientCartExample));
  }, []);

  return (
    <main className="flex flex-col h-screen items-center bg-slate-900 overflow-y-auto">
      <section className="w-[20%] h-full overflow-auto mt-[24px]">
        <PayPalScriptProvider options={paypalProviderInitialOpts}>
          <PayPalButtons
            style={{
              shape: "rect",
              layout: "vertical",
              color: "gold",
              label: "paypal",
            }}
            createOrder={onCreate}
            onApprove={onApprove}
          />
          {message ? <p className="text-red-500">{message}</p> : null}
        </PayPalScriptProvider>
      </section>
    </main>
  );
}
