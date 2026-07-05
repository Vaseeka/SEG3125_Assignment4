import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeInjector from "./components/ThemeInjector";
import SiteNavbar from "./components/SiteNavbar";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Feedback from "./pages/Feedback";
import FeedbackThanks from "./pages/FeedbackThanks";
import Cart from "./pages/Cart";

export default function App() {
  const [feedbackDraft, setFeedbackDraft] = useState(null);

  return (
    <CartProvider>
      <ThemeInjector />
      <div className="d-flex flex-column min-vh-100">
        <SiteNavbar />
        <main className="flex-grow-1" style={{ backgroundColor: "var(--color-surface)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/feedback"
              element={
                <Feedback
                  draft={feedbackDraft}
                  onSaveDraft={setFeedbackDraft}
                  onSubmitted={() => setFeedbackDraft(null)}
                />
              }
            />
            <Route path="/feedback/thanks" element={<FeedbackThanks />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}
