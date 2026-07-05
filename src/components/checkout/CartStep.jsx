import { Row, Col, Card, Button } from "react-bootstrap";
import { BsTrash, BsDashLg, BsPlusLg, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import content from "../../config/content";

export default function CartStep({ onNext }) {
  const { items, updateQty, removeFromCart, priceOf, subtotal, shipping, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted mb-3">{content.cart.emptyMessage}</p>
        <Button as={Link} to="/shop" className="btn-brand px-4">
          Browse the shop <BsArrowRight />
        </Button>
      </div>
    );
  }

  return (
    <Row className="g-4">
      <Col md={8}>
        {items.map(({ product, qty }) => {
          const price = priceOf(product);
          return (
            <Card key={product.id} className="card-elevated mb-3">
              <Card.Body className="d-flex align-items-center gap-3">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--color-primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                  }}
                >
                  {product.code}
                </div>
                <div className="flex-grow-1">
                  <div className="fw-semibold">{product.name}</div>
                  <div className="text-muted small">
                    {product.publisher.join(" / ")} · {product.franchise}
                  </div>
                </div>
                <div className="qty-stepper">
                  <button onClick={() => updateQty(product.id, qty - 1)} aria-label="Decrease">
                    <BsDashLg />
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => updateQty(product.id, qty + 1)} aria-label="Increase">
                    <BsPlusLg />
                  </button>
                </div>
                <div className="fw-bold text-brand" style={{ minWidth: 70, textAlign: "right" }}>
                  ${(price * qty).toFixed(2)}
                </div>
                <Button
                  variant="link"
                  className="text-muted p-0"
                  onClick={() => removeFromCart(product.id)}
                  aria-label="Remove item"
                >
                  <BsTrash />
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Col>

      <Col md={4}>
        <Card className="card-elevated p-3">
          <h6 className="fw-bold mb-3">{content.cart.orderSummary}</h6>
          {items.map(({ product, qty }) => (
            <div key={product.id} className="d-flex justify-content-between small text-muted mb-1">
              <span>
                {product.name} x{qty}
              </span>
              <span>${(priceOf(product) * qty).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between small mb-1">
            <span>{content.cart.subtotal}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between small mb-2">
            <span>{content.cart.shipping}</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
            <span>{content.cart.total}</span>
            <span className="text-brand">${total.toFixed(2)}</span>
          </div>
          <Button className="btn-brand w-100" onClick={onNext}>
            {content.cart.checkout} <BsArrowRight />
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
