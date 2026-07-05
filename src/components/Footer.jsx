import { Container } from "react-bootstrap";
import content from "../config/content";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white-50 py-3 text-center small">
      <Container fluid="lg">
        <div>{content.siteName} — {content.footer.tagline}</div>
      </Container>
    </footer>
  );
}
