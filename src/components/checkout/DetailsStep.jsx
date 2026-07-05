import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight, BsXLg } from "react-icons/bs";
import ConfirmModal from "../ConfirmModal";
import content from "../../config/content";

const EMPTY_FORM = { firstName: "", lastName: "", email: "", address: "", city: "", postal: "" };

// Auto-format postal/zip code
function formatPostal(raw) {
  const cleaned = raw.toUpperCase().replace(/\s+/g, "");
  const looksCanadian = /^[A-Z]\d[A-Z]/.test(cleaned);
  if (looksCanadian && cleaned.length > 3) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`;
  }
  return cleaned.slice(0, 10);
}

// Capitalizes the first letter as the user types a name/city
function capitalizeWords(raw) {
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DetailsStep({ details, onSubmit, onBack, onCancel }) {
  const [form, setForm] = useState(details || EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [showBackConfirm, setShowBackConfirm] = useState(false);

  const hasProgress = Object.values(form).some((v) => v.trim());
  const allFilled =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.address.trim() &&
    form.city.trim() &&
    form.postal.trim();

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.address.trim()) e.address = "Street address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.postal.trim()) e.postal = "Postal / ZIP is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) onSubmit(form);
  }

  function handleBackClick() {
    if (hasProgress) setShowBackConfirm(true);
    else onBack();
  }

  const t = content.cart.details;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: 560, marginInline: "auto" }}>
        <h2 className="fw-bold mb-0">{t.title}</h2>
        <Button className="btn-outline-brand px-3" onClick={onCancel}>
          {content.cart.cancel} <BsXLg />
        </Button>
      </div>

      <Card className="card-elevated p-4 mx-auto" style={{ maxWidth: 560 }}>
        <Form onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>{t.firstName}</Form.Label>
              <Form.Control
                placeholder="Jane"
                value={form.firstName}
                isInvalid={!!errors.firstName}
                onChange={(e) => update("firstName", capitalizeWords(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>{t.lastName}</Form.Label>
              <Form.Control
                placeholder="Smith"
                value={form.lastName}
                isInvalid={!!errors.lastName}
                onChange={(e) => update("lastName", capitalizeWords(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Col>
            <Col md={12}>
              <Form.Label>{t.email}</Form.Label>
              <Form.Control
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                isInvalid={!!errors.email}
                onChange={(e) => update("email", e.target.value.trim())}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
            <Col md={12}>
              <Form.Label>{t.address}</Form.Label>
              <Form.Control
                placeholder="123 Maple Street"
                value={form.address}
                isInvalid={!!errors.address}
                onChange={(e) => update("address", capitalizeWords(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>{t.city}</Form.Label>
              <Form.Control
                placeholder="Ottawa"
                value={form.city}
                isInvalid={!!errors.city}
                onChange={(e) => update("city", capitalizeWords(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>{t.postal}</Form.Label>
              <Form.Control
                placeholder="K1A 0A9"
                value={form.postal}
                isInvalid={!!errors.postal}
                onChange={(e) => update("postal", formatPostal(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">{errors.postal}</Form.Control.Feedback>
            </Col>
          </Row>

          <div className="d-flex justify-content-between mt-4">
            <Button type="button" className="btn-outline-brand px-4" onClick={handleBackClick}>
              <BsArrowLeft /> {content.cart.goBack}
            </Button>
            <Button type="submit" className={allFilled ? "btn-brand px-4" : "px-4"} variant={allFilled ? undefined : "secondary"} disabled={!allFilled}>
              {allFilled ? (
                <>
                  {t.continue} <BsArrowRight />
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
        message="Are you sure you want to go back to your cart?"
        emphasis="The details you've entered here will be saved for when you return."
        confirmText="Yes, go back"
        cancelText="No, stay here"
        onConfirm={() => {
          setShowBackConfirm(false);
          onBack();
        }}
        onCancel={() => setShowBackConfirm(false)}
      />
    </>
  );
}
