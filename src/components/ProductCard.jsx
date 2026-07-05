import { useRef, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { BsDashLg, BsPlusLg, BsImage } from "react-icons/bs";
import { useCart } from "../context/CartContext";
import content from "../config/content";

function headerColorFor(product) {
  if (product.publisher.includes("Sega")) return "var(--color-primary-dark)";
  if (product.publisher.includes("Square Enix") && !product.publisher.includes("Nintendo")) return "#2E7DD1";
  return "var(--color-primary)";
}

// Builds the full list of facet tags this card should display:
// franchise, every publisher, every genre, every player-count value
function buildTags(product) {
  return [
    { facet: "franchise", value: product.franchise },
    ...product.publisher.map((v) => ({ facet: "publisher", value: v })),
    ...product.genre.map((v) => ({ facet: "genre", value: v })),
    ...product.players.map((v) => ({ facet: "players", value: v })),
  ];
}

export default function ProductCard({ product, filters, onToggleFacet }) {
  const { items, addToCart, updateQty, priceOf } = useCart();
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState("");
  const inputRef = useRef(null);

  const cartLine = items.find((i) => i.product.id === product.id);
  const qty = cartLine?.qty || 0;
  const finalPrice = priceOf(product);
  const showStepper = qty > 0;
  const tags = buildTags(product);

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
      {product.image ? (
        <div
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "var(--color-surface-alt)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>
      ) : (
        <div
          style={{
            backgroundColor: headerColorFor(product),
            color: "#fff",
            height: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >

          <BsImage size={22} style={{ opacity: 0.6 }} />
          <div className="fw-bold fs-5">{product.code}</div>
          <div style={{ fontSize: "0.65rem", letterSpacing: 1, opacity: 0.7 }}>
            {product.franchise.toUpperCase()} · ADD IMAGE
          </div>
        </div>
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>

        <div className="mb-2">
          {tags.map((t) => {
            const isSelected = filters ? filters[t.facet]?.has(t.value) : false;
            const isFilterAware = !!filters;
            const className =
              "facet-tag" + (isSelected ? " selected" : isFilterAware ? " matched" : " plain");
            return (
              <button
                key={t.facet + t.value}
                type="button"
                className={className}
                onClick={onToggleFacet ? () => onToggleFacet(t.facet, t.value) : undefined}
                style={{ cursor: onToggleFacet ? "pointer" : "default" }}
                title={onToggleFacet ? `Filter by ${t.value}` : undefined}
              >
                {t.value}
              </button>
            );
          })}
        </div>

        <div className="mt-auto">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="fw-bold fs-5 text-brand">${finalPrice.toFixed(2)}</span>
            {product.discount > 0 && (
              <>
                <span className="text-muted" style={{ textDecoration: "line-through", fontSize: "0.85rem" }}>
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
            <Button className="btn-cart w-100" onClick={() => addToCart(product, 1)}>
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
