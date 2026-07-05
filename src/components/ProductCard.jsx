import { useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import content from "../config/content";

function headerColorFor(product) {
  // Alternate header colours by publisher, purely visual grouping
  if (product.publisher.includes("Sega")) return "var(--color-primary-dark)";
  if (product.publisher.includes("Square Enix") && !product.publisher.includes("Nintendo")) return "#2E7DD1";
  return "var(--color-primary)";
}

export default function ProductCard({ product }) {
  const { items, addToCart, updateQty, priceOf } = useCart();
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState("");
  const inputRef = useRef(null);

  const cartLine = items.find((i) => i.product.id === product.id);
  const qty = cartLine?.qty || 0;
  const finalPrice = priceOf(product);
  const showStepper = qty > 0;

  function startEdit() {
    setEditVal(String(qty));
    setEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  }

  function commitEdit() {
    const n = parseInt(editVal, 10);
    updateQty(product.id, Number.isNaN(n) || n < 0 ? 0 : Math.min(n, 99));
    setEditing(false);
  }

  return (
    <Card className="card-elevated h-100">
      <div
        style={{
          backgroundColor: headerColorFor(product),
          color: "#fff",
          height: 110,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="fw-bold fs-4">{product.code}</div>
        <div style={{ fontSize: "0.7rem", letterSpacing: 1, opacity: 0.8 }}>
          {product.franchise.toUpperCase()}
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
        <div className="mb-2">
          <span
            className="pill-tag"
            style={{
              backgroundColor: "var(--color-primary-light)",
              color: "var(--color-primary-dark)",
            }}
          >
            {product.franchise}
          </span>
          <span
            className="pill-tag"
            style={{ backgroundColor: "#EEF1FB", color: "#4A5AA8" }}
          >
            {product.publisher.join(" / ")}
          </span>
        </div>

        <div className="mt-auto">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="fw-bold fs-5">${finalPrice.toFixed(2)}</span>
            {product.discount > 0 && (
              <>
                <span
                  className="text-muted"
                  style={{ textDecoration: "line-through", fontSize: "0.85rem" }}
                >
                  ${product.price.toFixed(2)}
                </span>
                <span className="badge badge-discount">-{product.discount}%</span>
              </>
            )}
          </div>

          {showStepper && (
            <div className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
              x {qty} = ${(finalPrice * qty).toFixed(2)}
            </div>
          )}

          {!showStepper ? (
            <Button className="btn-brand w-100" onClick={() => addToCart(product, 1)}>
              {content.shop.addToCart}
            </Button>
          ) : (
            <div className="qty-stepper w-100 justify-content-between px-2">
              <button onClick={() => updateQty(product.id, qty - 1)} aria-label="Decrease quantity">
                <BsDashLg />
              </button>
              {editing ? (
                <input
                  ref={inputRef}
                  type="number"
                  value={editVal}
                  onChange={(e) => setEditVal(e.target.value)}
                  onBlur={commitEdit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitEdit();
                    if (e.key === "Escape") setEditing(false);
                  }}
                />
              ) : (
                <span onClick={startEdit} title="Click to type a quantity">
                  {qty}
                </span>
              )}
              <button onClick={() => updateQty(product.id, qty + 1)} aria-label="Increase quantity">
                <BsPlusLg />
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
