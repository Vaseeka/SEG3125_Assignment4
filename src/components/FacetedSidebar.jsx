import { Form } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { facetOptions } from "../data/products";
import content from "../config/content";

// filters shape: { publisher: Set, franchise: Set, genre: Set, players: Set, maxPrice: number }
export default function FacetedSidebar({ filters, setFilters, minPrice, maxPriceBound }) {
  function toggle(facet, value) {
    setFilters((prev) => {
      const next = new Set(prev[facet]);
      next.has(value) ? next.delete(value) : next.add(value);
      return { ...prev, [facet]: next };
    });
  }

  function clearAll() {
    setFilters({
      publisher: new Set(),
      franchise: new Set(),
      genre: new Set(),
      players: new Set(),
      maxPrice: maxPriceBound,
    });
  }

  const activeTags = [
    ...[...filters.publisher].map((v) => ({ facet: "publisher", value: v })),
    ...[...filters.franchise].map((v) => ({ facet: "franchise", value: v })),
    ...[...filters.genre].map((v) => ({ facet: "genre", value: v })),
    ...[...filters.players].map((v) => ({ facet: "players", value: v })),
  ];

  return (
    <div className="faceted-sidebar p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-bold mb-0">{content.shop.filtersTitle}</h6>
      </div>

      {activeTags.length > 0 && (
        <div className="d-flex flex-wrap gap-1 mb-3">
          <button
            className="btn btn-sm rounded-pill"
            style={{ border: "1px solid var(--color-accent)", color: "var(--color-accent)", background: "transparent" }}
            onClick={clearAll}
          >
            {content.shop.clearAll} <BsXLg size={10} />
          </button>
          {activeTags.map((t) => (
            <button
              key={t.facet + t.value}
              className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-1"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff", border: "none" }}
              onClick={() => toggle(t.facet, t.value)}
            >
              {t.value} <BsXLg size={10} />
            </button>
          ))}
        </div>
      )}

      <hr />

      <FacetGroup
        title={content.shop.publisher}
        options={facetOptions.publisher}
        selected={filters.publisher}
        onToggle={(v) => toggle("publisher", v)}
      />
      <FacetGroup
        title={content.shop.franchise}
        options={facetOptions.franchise}
        selected={filters.franchise}
        onToggle={(v) => toggle("franchise", v)}
      />
      <FacetGroup
        title={content.shop.genre}
        options={facetOptions.genre}
        selected={filters.genre}
        onToggle={(v) => toggle("genre", v)}
      />
      <FacetGroup
        title={content.shop.players}
        options={facetOptions.players}
        selected={filters.players}
        onToggle={(v) => toggle("players", v)}
      />

      <div className="mt-3">
        <div className="fw-semibold small mb-2" style={{ letterSpacing: 1, color: "var(--color-primary)" }}>
          {content.shop.maxPrice}
        </div>
        <Form.Range
          min={minPrice}
          max={maxPriceBound}
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: +e.target.value }))}
        />
        <div className="d-flex justify-content-between small text-muted">
          <span>${minPrice}</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
}

function FacetGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-3">
      <div className="fw-semibold small text-muted mb-1">{title}</div>
      {options.map((opt) => (
        <Form.Check
          key={opt}
          type="checkbox"
          id={`${title}-${opt}`}
          label={opt}
          checked={selected.has(opt)}
          onChange={() => onToggle(opt)}
          className="mb-1"
        />
      ))}
    </div>
  );
}
