import { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsHouseDoorFill, BsBagFill, BsChatSquareTextFill, BsCartFill, BsController } from "react-icons/bs";
import content from "../config/content";
import { useCart } from "../context/CartContext";

function IconTip({ id, text, children }) {
  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip id={id}>{text}</Tooltip>}>
      {children}
    </OverlayTrigger>
  );
}

export default function SiteNavbar() {
  const { itemCount } = useCart();
  const [bounce, setBounce] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const prevCount = useRef(itemCount);
  const bubbleShownOnce = useRef(false);

  useEffect(() => {
    if (itemCount > prevCount.current) {
      setBounce(true);
      const bounceTimer = setTimeout(() => setBounce(false), 450);

      if (!bubbleShownOnce.current) {
        bubbleShownOnce.current = true;
        setShowBubble(true);
        const bubbleTimer = setTimeout(() => setShowBubble(false), 3500);
        prevCount.current = itemCount;
        return () => {
          clearTimeout(bounceTimer);
          clearTimeout(bubbleTimer);
        };
      }

      prevCount.current = itemCount;
      return () => clearTimeout(bounceTimer);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  const linkClass = ({ isActive }) =>
    "navbar-icon-link nav-link" + (isActive ? " active" : "");

  return (
    <Navbar expand="md" className="bg-brand-dark py-3" variant="dark" sticky="top">
      <Container fluid="lg">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-white d-flex align-items-center gap-2">
          <BsController size={20} className="text-brand" />
          {content.siteName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-md-4 gap-2">
            <IconTip id="tip-home" text="Go back to our homepage here">
              <Nav.Link as={NavLink} to="/" end className={linkClass}>
                <BsHouseDoorFill size={16} /> {content.nav.home}
              </Nav.Link>
            </IconTip>
            <IconTip id="tip-shop" text="Browse our DS game collection here">
              <Nav.Link as={NavLink} to="/shop" className={linkClass}>
                <BsBagFill size={16} /> {content.nav.shop}
              </Nav.Link>
            </IconTip>
            <IconTip id="tip-feedback" text="Share your experience here">
              <Nav.Link as={NavLink} to="/feedback" className={linkClass}>
                <BsChatSquareTextFill size={16} /> {content.nav.feedback}
              </Nav.Link>
            </IconTip>
            <div className="position-relative">
              <IconTip
                id="tip-cart"
                text="View the games in your cart and start the checkout process here"
              >
                <Nav.Link as={NavLink} to="/cart" className={linkClass}>
                  <span className={"position-relative" + (bounce ? " cart-pop" : "")}>
                    <BsCartFill size={16} />
                    {itemCount > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {itemCount}
                      </Badge>
                    )}
                  </span>{" "}
                  {content.nav.cart}
                </Nav.Link>
              </IconTip>
              {showBubble && <div className="cart-bubble">Click the shopping cart icon when you're ready to checkout the game you selected</div>}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
