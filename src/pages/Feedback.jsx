import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import content from "../config/content";

export default function Feedback() {
  const navigate = useNavigate();
  const [howFound, setHowFound] = useState("");
  const [ease, setEase] = useState(0);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/feedback/thanks");
  }

  return (
    <Container fluid="lg" className="py-4" style={{ maxWidth: 700 }}>
      <h2 className="fw-bold mb-4">{content.feedback.title}</h2>
      <Card className="card-elevated p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">{content.feedback.howDidYouFind}</Form.Label>
            <Form.Select value={howFound} onChange={(e) => setHowFound(e.target.value)}>
              <option value="">Select an option...</option>
              {content.feedback.howDidYouFindOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">{content.feedback.easeQuestion}</Form.Label>
            <div>
              <StarRating value={ease} onChange={setEase} />
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">{content.feedback.ratingQuestion}</Form.Label>
            <div>
              <StarRating value={rating} onChange={setRating} />
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">{content.feedback.commentsLabel}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder={content.feedback.commentsPlaceholder}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-between gap-3 flex-wrap">
            <Button
              type="button"
              className="btn-brand px-4"
              onClick={() => navigate("/")}
            >
              <BsArrowLeft /> {content.feedback.later}
            </Button>
            <Button type="submit" className="btn-brand px-4">
              {content.feedback.submit} <BsArrowRight />
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
