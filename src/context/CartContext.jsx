import { createContext, useContext, useMemo, useState } from "react";
import content from "../config/content";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { product, qty }
  const [lastOrder, setLastOrder] = useState(null);

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { product, qty }];
    });
  }

  function updateQty(productId, qty) {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.product.id !== productId)
        : prev.map((i) => (i.product.id === productId ? { ...i, qty } : i))
    );
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  function clearCart() {
    setItems([]);
  }

  function priceOf(product) {
    return product.discount
      ? +(product.price * (1 - product.discount / 100)).toFixed(2)
      : product.price;
  }

  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + priceOf(i.product) * i.qty, 0);
  const shipping = items.length > 0 ? content.shippingCost : 0;
  const total = +(subtotal + shipping).toFixed(2);

  function placeOrder(details, payment) {
    const orderId = `NS-${Math.floor(10000 + Math.random() * 89999)}`;
    const order = {
      orderId,
      items,
      subtotal: +subtotal.toFixed(2),
      shipping,
      total,
      details,
      payment,
    };
    setLastOrder(order);
    return order;
  }

  const value = useMemo(
    () => ({
      items,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      priceOf,
      itemCount,
      subtotal,
      shipping,
      total,
      placeOrder,
      lastOrder,
    }),
    [items, itemCount, subtotal, shipping, total, lastOrder]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
