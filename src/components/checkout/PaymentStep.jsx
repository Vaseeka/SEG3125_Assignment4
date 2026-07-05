import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight, BsLockFill, BsXLg } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import ConfirmModal from "../ConfirmModal";
import content from "../../config/content";

// Groups digits into 4s: "1234567812345678" -> "1234 5678 1234 5678" 
// (used when user is entering credit card number)
function formatCardNumber(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

// Auto-inserts the "/" as the user types: "0828" -> "08/28"
// (used when entering the expiry date of the card)
function formatExpiry(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatCvv(raw) {
  return raw.replace(/\D/g, "").slice(0, 4);
}

function capitalizeWords(raw) {
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

const EMPTY_FORM = { nameOnCard: "", cardNumber: "", expiry: "", cvv: "" };

export default function PaymentStep({ onSubmit, onBack, onCancel }) {
  const { items, priceOf, subtotal, shipping, total } = useCart();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [showBackConfirm, setShowBackConfirm] = useState(false);
  const [showPayConfirm, setShowPayConfirm] = useState(false);

  const hasProgress = Object.values(form).some((v) => v.trim());
  const allFilled =
    form.nameOnCard.trim() && form.cardNumber.trim() && form.expiry.trim() && form.cvv.trim();

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.nameOnCard.trim()) e.nameOnCard = "Name on card is required";
    if (form.cardNumber.replace(/\s/g, "").length !== 16) e.cardNumber = "Enter a valid 16-digit card number";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = "Format: MM/YY";
    if (form.cvv.length < 3) e.cvv = "3-4 digits required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) setShowPayConfirm(true);
  }

  function handleBackClick() {
    if (hasProgress) setShowBackConfirm(true);
    else onBack();
  }

  const t = content.cart.payment;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: 560, marginInline: "auto" }}>
        <h2 className="fw-bold mb-0">{t.title}</h2>
        <Button className="btn-outline-brand px-3" onClick={onCancel}>
          {content.cart.cancel} <BsXLg />
        </Button>
      </div>

      <Card className="card-elevated p-4 mx-auto mb-3" style={{ maxWidth: 560 }}>
        {items.map(({ product, qty }) => (
          <div key={product.id} className="d-flex justify-content-between small mb-1">
            <span className="fw-semibold">
              {product.name}
              {qty > 1 ? ` x${qty}` : ""}
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
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>{content.cart.totalDue}</span>
          <span className="text-brand">${total.toFixed(2)}</span>
        </div>
      </Card>

      <Card className="card-elevated p-4 mx-auto" style={{ maxWidth: 560 }}>
        <div className="d-flex align-items-center gap-2 text-muted small mb-3">
          <BsLockFill /> {t.secureNote}
        </div>

        <Form onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            <Col md={12}>
              <Form.Label>{t.nameOnCard}</Form.Label>
              <Form.Control
                placeholder="Jane Smith"
                value={form.nameOnCard}
                isInvalid={!!errors.nameOnCard}
                onChange={(e) => update("nameOnCard", capitalizeWords(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.nameOnCard}</Form.Control.Feedback>
            </Col>
            <Col md={12}>
              <Form.Label>{t.cardNumber}</Form.Label>
              <Form.Control
                placeholder="1234 5678 9012 3456"
                value={form.cardNumber}
                isInvalid={!!errors.cardNumber}
                onChange={(e) => update("cardNumber", formatCardNumber(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>{t.expiry}</Form.Label>
              <Form.Control
                placeholder="08/28"
                value={form.expiry}
                isInvalid={!!errors.expiry}
                onChange={(e) => update("expiry", formatExpiry(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.expiry}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>{t.cvv}</Form.Label>
              <Form.Control
                placeholder="123"
                type="password"
                value={form.cvv}
                isInvalid={!!errors.cvv}
                onChange={(e) => update("cvv", formatCvv(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-4">
            <Button type="button" className="btn-outline-brand px-4" onClick={handleBackClick}>
              <BsArrowLeft /> {content.cart.goBack}
            </Button>
            <Button type="submit" className={allFilled ? "btn-brand px-4" : "px-4"} variant={allFilled ? undefined : "secondary"} disabled={!allFilled}>
              {allFilled ? (
                <>
                  {t.pay(total.toFixed(2))} <BsArrowRight />
                </>
              ) : (
                "Fill out all info to continue"
              )}
            </Button>
          </div>
        </Form>
      </Card>

      <ConfirmModal
        show={showBackConfirm}
        message="Are you sure you want to go back and edit your personal info?"
        emphasis="Your payment info will not be saved and will need to be re-entered when you return."
        confirmText="Yes, I'll go back"
        cancelText="No, I'll stay here"
        onConfirm={() => {
          setShowBackConfirm(false);
          onBack();
        }}
        onCancel={() => setShowBackConfirm(false)}
      />

      <ConfirmModal
        show={showPayConfirm}
        title="Confirm payment"
        message={`You're about to pay $${total.toFixed(2)} for your order.`}
        emphasis="This payment cannot be undone once confirmed so make sure everything is correct."
        confirmText="I'm ready to pay now"
        cancelText="I need to look over my order"
        onConfirm={() => {
          setShowPayConfirm(false);
          onSubmit(form);
        }}
        onCancel={() => setShowPayConfirm(false)}
      />
    </>
  );
}
