import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import products, { PRICE_MIN, PRICE_MAX } from "../data/products";
import ProductCard from "../components/ProductCard";
import FacetedSidebar from "../components/FacetedSidebar";
import content from "../config/content";

function effectivePriceOf(p) {
  return p.discount ? p.price * (1 - p.discount / 100) : p.price;
}

const PAGE_SIZE = 6;

export default function Shop() {
  const location = useLocation();
  const [filters, setFilters] = useState({
    publisher: new Set(),
    franchise: new Set(),
    genre: new Set(),
    players: new Set(),
    maxPrice: PRICE_MAX,
    onSale: !!location.state?.onSaleOnly,
  });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        if (filters.publisher.size && !p.publisher.some((v) => filters.publisher.has(v))) return false;
        if (filters.franchise.size && !filters.franchise.has(p.franchise)) return false;
        if (filters.genre.size && !p.genre.some((v) => filters.genre.has(v))) return false;
        if (filters.players.size && !p.players.some((v) => filters.players.has(v))) return false;
        const effectivePrice = effectivePriceOf(p);
        if (effectivePrice > filters.maxPrice) return false;
        if (filters.onSale && !(p.discount > 0)) return false;
        return true;
      })
      .sort((a, b) => effectivePriceOf(a) - effectivePriceOf(b));
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, filtered.length);

  function handleSetFilters(update) {
    setFilters(update);
    setPage(1);
  }

  function toggleFacetFromCard(facet, value) {
    handleSetFilters((prev) => {
      const next = new Set(prev[facet]);
      next.has(value) ? next.delete(value) : next.add(value);
      return { ...prev, [facet]: next };
    });
  }

  return (
    <Container fluid="lg" className="py-4">
      <h2 className="fw-bold mb-4">{content.shop.title}</h2>
      <p className="mb-4">{content.shop.body}</p>
      <Row className="g-4">
        <Col md={3}>
          <FacetedSidebar
            filters={filters}
            setFilters={handleSetFilters}
            minPrice={PRICE_MIN}
            maxPriceBound={PRICE_MAX}
          />
        </Col>
        <Col md={9}>
          {pageItems.length === 0 ? (
            <div
              className="d-flex align-items-center justify-content-center text-center text-muted"
              style={{ minHeight: 320 }}
            >
              <p className="mb-0">No games match your filters yet — try clearing a few.</p>
            </div>
          ) : (
            <Row className="g-4">
              {pageItems.map((p) => (
                <Col key={p.id} sm={6} lg={4}>
                  <ProductCard product={p} filters={filters} onToggleFacet={toggleFacetFromCard} />
                </Col>
              ))}
            </Row>
          )}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="text-muted small">
              {content.shop.resultsLabel(rangeStart, rangeEnd, filtered.length)}
            </span>
            <Pagination>
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              />
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Pagination.Item
                  key={n}
                  active={n === currentPage}
                  onClick={() => setPage(n)}
                >
                  {n}
                </Pagination.Item>
              ))}
              <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
