import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsEnvelopeFill, BsTelephoneFill, BsArrowRight } from "react-icons/bs";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import content from "../config/content";

export default function Home() {
  const deals = products.filter((p) => p.discount > 0).slice(0, 3);
  const popular = products.slice(3, 6);

  return (
    <>
      {/* Hero */}
      <section className="hero-section py-5">
        <Container fluid="lg">
          <Row className="align-items-center g-4">
            <Col md={6}>
              <h1 className="fw-bold display-6">
                {content.home.hero.eyebrow}{" "}
                <span className="text-brand">{content.home.hero.highlight}</span>
              </h1>
              <Button as={Link} to="/shop" className="btn-brand mt-3 px-4 py-2">
                {content.home.hero.cta} <BsArrowRight />
              </Button>
            </Col>
            <Col md={6}>
              <div
                style={{
                  height: 220,
                  borderRadius: "var(--radius-lg)",
                  background:
                    "linear-gradient(135deg, var(--color-dark-soft), var(--color-primary-dark))",
                }}
                className="d-flex align-items-center justify-content-center text-white fw-bold"
              >
                DS Game Cartridges
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Deals */}
      <section className="py-5">
        <Container fluid="lg">
          <h3 className="fw-bold mb-4">
            {content.home.dealsTitle}
            <span className="text-brand">{content.home.dealsHighlight}</span>
          </h3>
          <Row className="g-4">
            {deals.map((p) => (
              <Col key={p.id} sm={6} md={4}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular */}
      <section className="py-4">
        <Container fluid="lg">
          <h3 className="fw-bold mb-4">
            {content.home.popularTitle}
            <span className="text-brand">{content.home.popularHighlight}</span>
          </h3>
          <Row className="g-4">
            {popular.map((p) => (
              <Col key={p.id} sm={6} md={4}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Feedback banner */}
      <section className="bg-brand-dark text-white py-5 mt-4">
        <Container fluid="lg">
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h3 className="fw-bold text-brand">{content.home.feedbackBanner.title}</h3>
              <p className="mb-3">{content.home.feedbackBanner.body}</p>
              <Button as={Link} to="/feedback" className="btn-brand px-4">
                {content.home.feedbackBanner.cta} <BsArrowRight />
              </Button>
            </Col>
            <Col md={5} className="text-center">
              <div style={{ fontSize: "4rem" }}>🙂</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-brand-dark text-white py-5">
        <Container fluid="lg">
          <Row className="g-4">
            <Col md={6}>
              <h4 className="fw-bold text-brand">{content.home.contact.title}</h4>
              <p className="mb-1">{content.home.contact.subtitle}</p>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <BsEnvelopeFill className="text-brand" />
                <span>{content.home.contact.email}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <BsTelephoneFill className="text-brand" />
                <span>{content.home.contact.phone}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
