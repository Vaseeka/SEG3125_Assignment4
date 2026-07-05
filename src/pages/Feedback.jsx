import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import ConfirmModal from "../components/ConfirmModal";
import content from "../config/content";

export default function Feedback({ draft, onSaveDraft, onSubmitted }) {
  const navigate = useNavigate();
  const [howFound, setHowFound] = useState(draft?.howFound || "");
  const [ease, setEase] = useState(draft?.ease || 0);
  const [rating, setRating] = useState(draft?.rating || 0);
  const [comments, setComments] = useState(draft?.comments || "");
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  const hasProgress = howFound || ease > 0 || rating > 0 || comments.trim();

  function currentDraft() {
    return { howFound, ease, rating, comments };
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitted?.();
    navigate("/feedback/thanks");
  }

  function handleLaterClick() {
    if (hasProgress) {
      setShowLeaveConfirm(true);
    } else {
      navigate("/");
    }
  }

  function confirmLeaveAndSaveDraft() {
    onSaveDraft?.(currentDraft());
    setShowLeaveConfirm(false);
    navigate("/");
  }

  return (
    <Container fluid="lg" className="py-4" style={{ maxWidth: 700 }}>
      <h2 className="fw-bold mb-4 text-center">{content.feedback.title}</h2>
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
            <Button type="button" className="btn-outline-brand px-4" onClick={handleLaterClick}>
              <BsArrowLeft /> {content.feedback.later}
            </Button>
            <Button
              type="submit"
              className={hasProgress ? "btn-brand px-4" : "px-4"}
              variant={hasProgress ? undefined : "secondary"}
              disabled={!hasProgress}
            >
              {hasProgress ? (
                <>
                  {content.feedback.submit} <BsArrowRight />
                </>
              ) : (
                "Answer at least one question to submit"
              )}
            </Button>
          </div>
        </Form>
      </Card>

      <ConfirmModal
        show={showLeaveConfirm}
        message="You've already started filling out this survey."
        emphasis="We'll save a draft of your answers so you can pick up right where you left off."
        confirmText="Save draft & leave"
        cancelText="Keep filling it out"
        onConfirm={confirmLeaveAndSaveDraft}
        onCancel={() => setShowLeaveConfirm(false)}
      />
    </Container>
  );
}
