import { Routes, Route } from "react-router-dom";
import ThemeInjector from "./components/ThemeInjector";
import SiteNavbar from "./components/SiteNavbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Feedback from "./pages/Feedback";
import FeedbackThanks from "./pages/FeedbackThanks";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <CartProvider>
      <ThemeInjector />
      <div className="d-flex flex-column min-vh-100">
        <SiteNavbar />
        <main className="flex-grow-1" style={{ backgroundColor: "var(--color-surface)" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/feedback/thanks" element={<FeedbackThanks />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
