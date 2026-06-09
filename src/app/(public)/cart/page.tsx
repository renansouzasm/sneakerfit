"use client";

import { useCartContext } from "@/context/cart/useCartContext";
import { formatCurrencyBrl } from "@/utils/formatCurrencyBrl";
import { CartItem } from "../components/cart-item";

export default function CartPage() {
  const { cart } = useCartContext();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <main className="py-16 px-4 sm:px-8">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="mb-12 text-2xl sm:text-4xl font-bold">
          My Cart: {cart.length}
        </h1>

        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-sm border-b border-border">
          <span className="col-span-5">Product</span>
          <span className="col-span-2">Price</span>
          <span className="col-span-2">Qty</span>
          <span className="col-span-2">Total</span>
          <span></span>
        </div>

        <div className="mb-8">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 rounded-xl p-4 py-8 md:p-8 bg-surface-primary">
          <div>
            <h2 className="mb-4 text-base font-semibold">
              Choose shipping mode:
            </h2>
            <div className="grid gap-4">
              <div className="flex gap-4">
                <input
                  name="shipping"
                  id="pickup"
                  value="pickup"
                  type="radio"
                  defaultChecked
                />
                <label className="text-base cursor-pointer" htmlFor="pickup">
                  Store pickup <span>(In 20 min)</span> • <span>FREE</span>
                </label>
              </div>
              <div className="flex gap-4">
                <input
                  name="shipping"
                  id="delivery"
                  value="delivery"
                  type="radio"
                />
                <label className="text-base cursor-pointer" htmlFor="delivery">
                  Delivery at home <span>(Under 2 - 4 day)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid gap-2 text-sm items-start">
            <div className="flex items-center justify-between">
              <span>Subtotal HT</span>
              <span>{formatCurrencyBrl(total)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total</span>
              <span>{formatCurrencyBrl(total)}</span>
            </div>
          </div>

          <button className="md:col-span-2 mt-4 font-semibold cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
