import { Fragment } from "react";
import content from "../config/content";

// step: 0-indexed current step (0=Cart, 1=Details, 2=Payment, 3=Done)
// Steps are display-only — clicking a completed step does not navigate.
export default function CheckoutStepper({ step }) {
  const steps = content.cart.steps;

  return (
    <div className="checkout-stepper">
      {steps.map((label, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <Fragment key={label}>
            <div className="d-flex flex-column align-items-center" style={{ minWidth: 64 }}>
              <div className={"step-circle" + (done ? " done" : active ? " active" : "")}>
                {done ? "✓" : i + 1}
              </div>
              <div className={"step-label" + (active ? " active" : done ? " done" : "")}>{label}</div>
            </div>
            {i < steps.length - 1 && (
              <div className={"step-line" + (done ? " done" : "")} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
