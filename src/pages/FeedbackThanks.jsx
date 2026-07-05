import { Container, Card, Button } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import content from "../config/content";

export default function FeedbackThanks() {
  return (
    <Container fluid="lg" className="py-5" style={{ maxWidth: 600 }}>
      <Card className="card-elevated p-5 text-center">
        <BsCheckCircleFill size={64} color="var(--color-success)" className="mx-auto mb-3" />
        <h3 className="fw-bold">{content.feedback.thanks.title}</h3>
        <p className="text-muted">{content.feedback.thanks.body}</p>
        <Button as={Link} to="/" className="btn-brand mt-3 mx-auto px-4">
          {content.feedback.thanks.cta}
        </Button>
      </Card>
    </Container>
  );
}
