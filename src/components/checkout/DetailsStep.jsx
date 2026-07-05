import { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import content from "../../config/content";

export default function DetailsStep({ details, onSubmit, onBack }) {
  const [form, setForm] = useState(
    details || {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postal: "",
    }
  );

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  const t = content.cart.details;

  return (
    <Card className="card-elevated p-4" style={{ maxWidth: 640 }}>
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6}>
            <Form.Label>{t.firstName}</Form.Label>
            <Form.Control
              required
              placeholder="Jane"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>{t.lastName}</Form.Label>
            <Form.Control
              required
              placeholder="Smith"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </Col>
          <Col md={12}>
            <Form.Label>{t.email}</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="jane@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </Col>
          <Col md={12}>
            <Form.Label>{t.address}</Form.Label>
            <Form.Control
              required
              placeholder="123 Maple Street"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>{t.city}</Form.Label>
            <Form.Control
              required
              placeholder="Ottawa"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>{t.postal}</Form.Label>
            <Form.Control
              required
              placeholder="K1A 0A9"
              value={form.postal}
              onChange={(e) => update("postal", e.target.value)}
            />
          </Col>
        </Row>

        <div className="d-flex justify-content-between mt-4">
          <Button type="button" className="btn-outline-brand px-4" onClick={onBack}>
            <BsArrowLeft /> {content.cart.goBack}
          </Button>
          <Button type="submit" className="btn-brand px-4">
            {t.continue} <BsArrowRight />
          </Button>
        </div>
      </Form>
    </Card>
  );
}
