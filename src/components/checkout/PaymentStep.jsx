import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight, BsLockFill } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import content from "../../config/content";

export default function PaymentStep({ onSubmit, onBack }) {
  const { items, priceOf, subtotal, shipping, total } = useCart();
  const [form, setForm] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  const t = content.cart.payment;

  return (
    <Card className="card-elevated p-4" style={{ maxWidth: 640 }}>
      <div className="mb-3">
        {items.map(({ product, qty }) => (
          <div key={product.id} className="d-flex justify-content-between small mb-1">
            <span className="text-brand fw-semibold">{product.name}{qty > 1 ? ` x${qty}` : ""}</span>
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
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>{t.title}</span>
          <span className="text-brand">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2 text-muted small mb-3">
        <BsLockFill /> {t.secureNote}
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={12}>
            <Form.Label>{t.nameOnCard}</Form.Label>
            <Form.Control
              required
              placeholder="Jane Smith"
              value={form.nameOnCard}
              onChange={(e) => update("nameOnCard", e.target.value)}
            />
          </Col>
          <Col md={12}>
            <Form.Label>{t.cardNumber}</Form.Label>
            <Form.Control
              required
              placeholder="1234 5678 9012 3456"
              value={form.cardNumber}
              onChange={(e) => update("cardNumber", e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>{t.expiry}</Form.Label>
            <Form.Control
              required
              placeholder="08/28"
              value={form.expiry}
              onChange={(e) => update("expiry", e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>{t.cvv}</Form.Label>
            <Form.Control
              required
              placeholder="123"
              value={form.cvv}
              onChange={(e) => update("cvv", e.target.value)}
            />
          </Col>
        </Row>

        <div className="d-flex justify-content-between mt-4">
          <Button type="button" className="btn-outline-brand px-4" onClick={onBack}>
            <BsArrowLeft /> {content.cart.goBack}
          </Button>
          <Button type="submit" className="btn-brand px-4">
            {t.pay(total.toFixed(2))} <BsArrowRight />
          </Button>
        </div>
      </Form>
    </Card>
  );
}
