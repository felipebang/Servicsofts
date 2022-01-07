import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import "./Footer.css";




function Footer() {
  return (
    <div >
<Card className="col">

  <Card.Header >BIENVENIDOS</Card.Header>
  <Card.Body className="col">
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>

    <Button variant="primary">
    <Link className="letra" style={{ textDecoration: 'none' }}  to="Border">
                Inicio
                </Link></Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default Footer;
