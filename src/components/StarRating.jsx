import { useState } from "react";
import { BsStarFill } from "react-icons/bs";

export default function StarRating({ value, onChange, max = 5 }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating d-flex gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <BsStarFill
          key={n}
          size={28}
          color={n <= (hover || value) ? "var(--color-accent)" : "var(--color-border)"}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          role="button"
          aria-label={`Rate ${n} out of ${max}`}
        />
      ))}
    </div>
  );
}
