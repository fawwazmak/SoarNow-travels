import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

function TravelerInfo() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  return (
    <div className="container mt-3">
      <h1>Traveler information</h1>
      <h4 className="mt-3 mb-3">Contact information for all passengers</h4>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ height: "50px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formConfirmEmail">
              <Form.Label>Confirm e-mail *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Confirm email"
                style={{ height: "50px" }}
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Confirm your e-mail address</Form.Label>
          </Col>
        </Row>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Mobile number *</Form.Label>
          <PhoneInput
            country={"ng"}
            enableSearch={true}
            inputStyle={{ width: "49%", height: "50px" }}
            buttonStyle={{ borderRadius: "0", marginRight: "10px" }}
          />
        </Form.Group>
        <div className="alert-container mt-5">
          <Alert variant="info">
            Please enter your first name, middle names and last name exactly as
            they appear on your passport/ID to avoid issues at the airport. If
            there is a middle name, please enter it in the name field.
          </Alert>
        </div>

        <Form.Group controlId="formGender" className="mt-3 mb-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              label="Male"
              name={gender}
              type="radio"
              id="genderMale"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              name={gender}
              type="radio"
              id="genderFemale"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First name(s) *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                style={{ height: "50px" }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                style={{ height: "50px" }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formDob" className="mt-3">
          <Form.Label>Birthdate *</Form.Label>
          <Form.Control
            type="date"
            style={{ height: "50px" }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          continue
        </Button>
      </Form>
    </div>
  );
}

export default TravelerInfo;
