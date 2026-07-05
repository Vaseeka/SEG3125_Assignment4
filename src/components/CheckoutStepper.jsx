import content from "../config/content";

// step: 0-indexed current step (0=Cart, 1=Details, 2=Payment, 3=Done)
export default function CheckoutStepper({ step }) {
  const steps = content.cart.steps;

  return (
    <div className="d-flex align-items-center mb-4" style={{ maxWidth: 480 }}>
      {steps.map((label, i) => (
        <div key={label} className="d-flex align-items-center flex-grow-1">
          <div className="d-flex flex-column align-items-center">
            <div
              className={
                "step-circle" +
                (i < step ? " done" : i === step ? " active" : "")
              }
            >
              {i < step ? "✓" : i + 1}
            </div>
            <div className={"step-label" + (i === step ? " active" : "")}>{label}</div>
          </div>
          {i < steps.length - 1 && (
            <div className={"step-line" + (i < step ? " done" : "")} />
          )}
        </div>
      ))}
    </div>
  );
}
