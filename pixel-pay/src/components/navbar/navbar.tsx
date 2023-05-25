import {
  Navbar,
  Nav,
  Container,
  Image,
  Button,
  NavItem,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

function NavbarWelcome() {
  const goToHome = () => (window.location.href = "/");
  const goToAllGames = () => (window.location.href = "/games");
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <Image className="navbar-img logo" src="/img/pixel-logo.png" />
            <Image className="navbar-img text" src="/img/pixel-text.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={() => goToHome()}>HOME</Nav.Link>
              <Nav.Link onClick={() => goToAllGames()}>JOGOS</Nav.Link>
            </Nav>
            <Button className="ms-auto">Assine Já</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function NavbarHomePage() {
  return (
    <>
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export { NavbarWelcome, NavbarHomePage };
