import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Button,
  NavItem,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

function NavbarWelcome() {
  const goToHome = () => (window.location.href = "/");
  const goToAllGames = () => (window.location.href = "/games");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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
            <img
              className="user-info"
              src="/img/pngwing.com.png"
              height={30}
              onClick={() => setShow(true)}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        size="sm"
      >
        <Modal.Header>
          <Modal.Title>Dados do usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="user-lable">Usuário:</p>
          <p className="user-value">Mateus Lopes</p>

          <p className="user-lable">E-mail:</p>
          <p className="user-value">mateuslopes.dev@outlook.com</p>

          <p className="user-lable">Assinatura:</p>
          <p className="user-value">
            {localStorage.getItem("userPlan")
              ? localStorage.getItem("userPlan")
              : "Nenhum Plano Encontrado"}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
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
