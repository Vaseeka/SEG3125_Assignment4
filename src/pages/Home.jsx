import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsImage } from "react-icons/bs";
import products, { POPULAR_GAME_IDS } from "../data/products";
import ProductCard from "../components/ProductCard";
import content from "../config/content";

// Homepage photo of DS and game cartridges
const HERO_IMAGE = "/hero.jpg";

export default function Home() {
  const deals = products.filter((p) => p.discount > 0).slice(0, 3);
  const popular = POPULAR_GAME_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      {/* Main */}
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
              {HERO_IMAGE ? (
                <img
                  src={HERO_IMAGE}
                  alt="Nintendo DS games"
                  style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: "var(--radius-lg)" }}
                />
              ) : (
                <div
                  style={{
                    height: 220,
                    borderRadius: "var(--radius-lg)",
                    background:
                      "linear-gradient(135deg, var(--color-dark-soft), var(--color-primary-dark))",
                  }}
                  className="d-flex flex-column align-items-center justify-content-center text-white fw-bold gap-2"
                >
                  <BsImage size={26} style={{ opacity: 0.6 }} />
                  <span>ADD HERO IMAGE</span>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Deals + Popular */}
      <section className="py-5">
        <Container fluid="lg">
          <div className="home-section">
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-4">
              <h3 className="fw-bold mb-0">
                {content.home.dealsTitle}
                <span className="text-brand">{content.home.dealsHighlight}</span>
              </h3>
              <Button
                as={Link}
                to="/shop"
                state={{ onSaleOnly: true }}
                className="btn-brand px-3"
              >
                See other deals <BsArrowRight />
              </Button>
            </div>
            <Row className="g-4">
              {deals.map((p) => (
                <Col key={p.id} sm={6} md={4}>
                  <ProductCard product={p} />
                </Col>
              ))}
            </Row>
          </div>

          <div className="home-section mb-0">
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
          </div>
        </Container>
      </section>

      {/* Feedback */}
      <section className="bg-brand-dark text-white py-5">
        <Container fluid="lg" className="text-center">
          <div className="mx-auto" style={{ maxWidth: 560 }}>
            <h3 className="fw-bold text-brand">{content.home.feedbackBanner.title}</h3>
            <p className="mb-4">{content.home.feedbackBanner.body}</p>
            <Button as={Link} to="/feedback" className="btn-brand px-4">
              {content.home.feedbackBanner.cta} <BsArrowRight />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
