import { useState } from "react";
import { Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CheckoutStepper from "../components/CheckoutStepper";
import ConfirmModal from "../components/ConfirmModal";
import CartStep from "../components/checkout/CartStep";
import DetailsStep from "../components/checkout/DetailsStep";
import PaymentStep from "../components/checkout/PaymentStep";
import ConfirmationStep from "../components/checkout/ConfirmationStep";
import content from "../config/content";

export default function Cart() {
  const { items, placeOrder, clearCart } = useCart();
  const [step, setStep] = useState(0); // 0 Cart, 1 Details, 2 Payment, 3 Done
  const [details, setDetails] = useState(null);
  const [order, setOrder] = useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  function handleDetailsSubmit(form) {
    setDetails(form);
    setStep(2);
  }

  function handlePaymentSubmit(paymentForm) {
    const newOrder = placeOrder(details, paymentForm);
    setOrder(newOrder);
    setStep(3);
    clearCart();
  }

  function handleCancelConfirmed() {
    setShowCancelConfirm(false);
    setStep(0);
    setDetails(null);
  }

  return (
    <Container fluid="lg" className="py-4">
      <CheckoutStepper step={step} />

      <div className="d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: step === 0 ? 1100 : 640 }}>
          {step === 0 && <h2 className="fw-bold mb-4">{content.cart.title}</h2>}
          {step === 0 && <CartStep onNext={() => setStep(1)} />}
          {step === 1 && (
            <DetailsStep
              details={details}
              onSubmit={handleDetailsSubmit}
              onBack={() => setStep(0)}
              onCancel={() => setShowCancelConfirm(true)}
            />
          )}
          {step === 2 && (
            <PaymentStep
              onSubmit={handlePaymentSubmit}
              onBack={() => setStep(1)}
              onCancel={() => setShowCancelConfirm(true)}
            />
          )}
          {step === 3 && <ConfirmationStep order={order} />}
        </div>
      </div>

      <ConfirmModal
        show={showCancelConfirm}
        message="Are you sure you want to cancel your order?"
        emphasis="Your cart will be saved, but you'll need to restart checkout from the details step."
        confirmText="Yes, cancel order"
        cancelText="No, keep going"
        onConfirm={handleCancelConfirmed}
        onCancel={() => setShowCancelConfirm(false)}
      />
    </Container>
  );
}
