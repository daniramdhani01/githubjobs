import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="fs-4">
            <span className="fw-bold">GitHub</span>
            <span className="">Jobs</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Headers;
