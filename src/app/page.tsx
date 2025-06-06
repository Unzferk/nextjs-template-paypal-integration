"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalProviderInitialOpts } from "./config/paypal.config";

export default function Home() {
  const [message, setMessage] = useState("");
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
          />
          {message ? <p className="text-red-500">{message}</p> : null}
        </PayPalScriptProvider>
      </section>
    </main>
  );
}
