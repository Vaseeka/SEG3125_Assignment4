import { useState } from "react";
import { Form } from "react-bootstrap";
import { BsXLg, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { facetOptions } from "../data/products";
import content from "../config/content";

// filters shape: { publisher: Set, franchise: Set, genre: Set, players: Set, maxPrice: number }
export default function FacetedSidebar({ filters, setFilters, minPrice, maxPriceBound }) {
  const [open, setOpen] = useState({
    publisher: false,
    franchise: false,
    genre: false,
    players: false,
  });

  function toggleOpen(facet) {
    setOpen((prev) => ({ ...prev, [facet]: !prev[facet] }));
  }

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
      onSale: false,
    });
  }

  const activeTags = [
    ...[...filters.publisher].map((v) => ({ facet: "publisher", value: v })),
    ...[...filters.franchise].map((v) => ({ facet: "franchise", value: v })),
    ...[...filters.genre].map((v) => ({ facet: "genre", value: v })),
    ...[...filters.players].map((v) => ({ facet: "players", value: v })),
  ];
  if (filters.maxPrice < maxPriceBound) {
    activeTags.push({ facet: "maxPrice", value: `Under $${filters.maxPrice}` });
  }
  if (filters.onSale) {
    activeTags.push({ facet: "onSale", value: "On sale" });
  }

  function removeTag(t) {
    if (t.facet === "maxPrice") {
      setFilters((prev) => ({ ...prev, maxPrice: maxPriceBound }));
      return;
    }
    if (t.facet === "onSale") {
      setFilters((prev) => ({ ...prev, onSale: false }));
      return;
    }
    toggle(t.facet, t.value);
  }

  return (
    <div className="faceted-sidebar p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-bold mb-0">{content.shop.filtersTitle}</h6>
      </div>

      {activeTags.length > 0 && (
        <div className="d-flex flex-wrap gap-1 mb-3">
          <button
            className="btn btn-sm rounded-pill chip-btn"
            style={{ border: "1px solid var(--color-accent)", color: "var(--color-accent)", background: "transparent" }}
            onClick={clearAll}
          >
            {content.shop.clearAll} <BsXLg size={10} />
          </button>
          {activeTags.map((t) => (
            <button
              key={t.facet + t.value}
              className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-1 chip-btn"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff", border: "none" }}
              onClick={() => removeTag(t)}
            >
              {t.value} <BsXLg size={10} />
            </button>
          ))}
        </div>
      )}

      <hr />

      <Form.Check
        type="checkbox"
        id="filter-onsale"
        label="On sale only"
        checked={filters.onSale}
        onChange={() => setFilters((prev) => ({ ...prev, onSale: !prev.onSale }))}
        className="mb-3"
      />

      <FacetGroup
        title={content.shop.publisher}
        options={facetOptions.publisher}
        selected={filters.publisher}
        onToggle={(v) => toggle("publisher", v)}
        isOpen={open.publisher}
        onToggleOpen={() => toggleOpen("publisher")}
      />
      <FacetGroup
        title={content.shop.franchise}
        options={facetOptions.franchise}
        selected={filters.franchise}
        onToggle={(v) => toggle("franchise", v)}
        isOpen={open.franchise}
        onToggleOpen={() => toggleOpen("franchise")}
      />
      <FacetGroup
        title={content.shop.genre}
        options={facetOptions.genre}
        selected={filters.genre}
        onToggle={(v) => toggle("genre", v)}
        isOpen={open.genre}
        onToggleOpen={() => toggleOpen("genre")}
      />
      <FacetGroup
        title={content.shop.players}
        options={facetOptions.players}
        selected={filters.players}
        onToggle={(v) => toggle("players", v)}
        isOpen={open.players}
        onToggleOpen={() => toggleOpen("players")}
      />

      <div className="mb-1">
        <div className="fw-semibold small text-muted mb-2">{content.shop.maxPrice}</div>
        <Form.Range
          min={minPrice}
          max={maxPriceBound}
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: +e.target.value }))}
        />
        <div className="d-flex justify-content-between small text-muted">
          <span>${minPrice}</span>
          <span className="fw-bold" style={{ color: "var(--color-accent)" }}>
            ${filters.maxPrice}
          </span>
          <span>${maxPriceBound}</span>
        </div>
      </div>
    </div>
  );
}

function FacetGroup({ title, options, selected, onToggle, isOpen, onToggleOpen }) {
  return (
    <div className="mb-3">
      <button className="facet-group-toggle mb-2" onClick={onToggleOpen}>
        <span className="text-muted">{title}</span>
        {isOpen ? <BsChevronUp size={12} /> : <BsChevronDown size={12} />}
      </button>
      {isOpen &&
        options.map((opt) => (
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
