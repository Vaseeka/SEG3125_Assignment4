import { useMemo, useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FacetedSidebar from "../components/FacetedSidebar";
import content from "../config/content";

const PAGE_SIZE = 6;
const MIN_PRICE = Math.min(...products.map((p) => p.price));
const MAX_PRICE = Math.ceil(Math.max(...products.map((p) => p.price)));

export default function Shop() {
  const [filters, setFilters] = useState({
    publisher: new Set(),
    franchise: new Set(),
    genre: new Set(),
    players: new Set(),
    maxPrice: MAX_PRICE,
  });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.publisher.size && !p.publisher.some((v) => filters.publisher.has(v))) return false;
      if (filters.franchise.size && !filters.franchise.has(p.franchise)) return false;
      if (filters.genre.size && !p.genre.some((v) => filters.genre.has(v))) return false;
      if (filters.players.size && !p.players.some((v) => filters.players.has(v))) return false;
      if (p.price > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function handleSetFilters(update) {
    setFilters(update);
    setPage(1);
  }

  return (
    <Container fluid="lg" className="py-4">
      <h2 className="fw-bold mb-4">{content.shop.title}</h2>
      <Row className="g-4">
        <Col md={3}>
          <FacetedSidebar
            filters={filters}
            setFilters={handleSetFilters}
            minPrice={MIN_PRICE}
            maxPriceBound={MAX_PRICE}
          />
        </Col>
        <Col md={9}>
          {pageItems.length === 0 ? (
            <p className="text-muted">No games match your filters yet — try clearing a few.</p>
          ) : (
            <Row className="g-4">
              {pageItems.map((p) => (
                <Col key={p.id} sm={6} lg={4}>
                  <ProductCard product={p} />
                </Col>
              ))}
            </Row>
          )}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="text-muted small">
              {content.shop.resultsLabel(pageItems.length, filtered.length)}
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
