import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsHouseDoorFill, BsShopWindow, BsChatSquareTextFill, BsCartFill } from "react-icons/bs";
import content from "../config/content";
import { useCart } from "../context/CartContext";

export default function SiteNavbar() {
  const { itemCount } = useCart();

  const linkClass = ({ isActive }) =>
    "navbar-icon-link nav-link" + (isActive ? " active" : "");

  return (
    <Navbar expand="md" className="bg-brand-dark py-3" variant="dark" sticky="top">
      <Container fluid="lg">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-white">
          {content.siteName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-md-4 gap-2">
            <Nav.Link as={NavLink} to="/" end className={linkClass}>
              <BsHouseDoorFill size={16} /> {content.nav.home}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop" className={linkClass}>
              <BsShopWindow size={16} /> {content.nav.shop}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/feedback" className={linkClass}>
              <BsChatSquareTextFill size={16} /> {content.nav.feedback}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className={linkClass}>
              <span className="position-relative">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
