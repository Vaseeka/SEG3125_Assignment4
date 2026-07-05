import { Card, Button } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import content from "../../config/content";

export default function ConfirmationStep({ order }) {
  const t = content.cart.confirmation;
  if (!order) return null;

  return (
    <>
    <Card className="card-elevated p-4 text-center" style={{ maxWidth: 640 }}>
      <BsCheckCircleFill size={56} color="var(--color-success)" className="mx-auto mb-3" />
      <h3 className="fw-bold">{t.title}</h3>
      <p className="text-muted">{t.body(order.orderId)}</p>

      <div className="text-start bg-light rounded p-3 mt-3">
        <div className="text-uppercase small fw-semibold text-muted mb-2">{t.purchaseDetails}</div>
        {order.items.map(({ product, qty }) => {
          const unitPrice = product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;
          return (
            <div key={product.id} className="d-flex justify-content-between small mb-1">
              <span>
                {product.name}
                {qty > 1 ? ` x${qty}` : ""}
              </span>
              <span>${(unitPrice * qty).toFixed(2)}</span>
            </div>
          );
        })}
        <hr />
        <div className="d-flex justify-content-between small text-muted">
          <span>{content.cart.subtotal}</span>
          <span>${order.subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between small text-muted mb-1">
          <span>{content.cart.shipping}</span>
          <span>${order.shipping.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between fw-bold">
          <span>Total paid</span>
          <span className="text-brand">${order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="text-start mt-3">
        <div className="text-uppercase small fw-semibold text-muted mb-2">{t.whatsNext}</div>
        {t.steps.map((step, i) => (
          <div key={step} className="d-flex align-items-center gap-2 mb-2">
            <span
              style={{
                width: 24,
                height: 24,
                fontSize: "0.7rem",
                borderRadius: "50%",
                background: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <span className="small">{step}</span>
          </div>
        ))}
      </div>
    </Card>

    <p className="text-muted small text-center mt-4 mb-2">{t.beforeYouGo}</p>

    <div className="d-flex flex-row justify-content-center align-items-center gap-3 mt-2">
      <Button as={Link} to="/" className="btn-outline-brand px-4 text-nowrap">
        {t.goHome}
      </Button>
      <Button as={Link} to="/feedback" className="btn-brand px-4 text-nowrap">
        {t.fillSurvey}
      </Button>
    </div>
    </>
  );
}