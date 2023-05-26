import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.css";

import PropsPlans from "../../types/PropsPlans";

export default function PriceCard({ planInfos }: PropsPlans) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const chosePlan = (planName: string) => {
    setShow(true);
    localStorage.setItem("userPlan", planName);
  };
  return (
    <div>
      <div className="plan-price-card" key={planInfos.name}>
        <p className="plan-name">{planInfos.name}</p>

        <div className="price-value-wrapper">
          <p className="price-indicator">R$</p>
          <p className="price-value">{planInfos.value}</p>
          <span className="price-period">/mês</span>
        </div>

        <div className="plan-description">{planInfos.description}</div>

        <div className="plan-beneficits">
          {planInfos.benefits.map((benefit) => (
            <p>✓ {benefit} </p>
          ))}
        </div>

        <div className="plan-button-wrapper">
          <button onClick={() => chosePlan(planInfos.name)}>
            Escolha o plano
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header>
          <Modal.Title>Assinar plano</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Número do cartão</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Validade</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome do titular</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CPF do titular</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Assinar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
