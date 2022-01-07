import React from 'react'
import "./Border.css";
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'



function Border() {
    return (
      <div className="body">
<br />
<br />
          <h1 className="center">HOLA MUNDO</h1>
          
<div className="Filip">
   <Carousel  >
  <Carousel.Item>
    <img
      className="d-block-w-10"
      src="logo192.png"
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block-w-10"
      src="logo192.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block-w-10"
      src="logo192.png"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>

</div>
  <p className="exampleone">        
 “Dentro de cien años la América Latina será la 
 América Latina de Bolívar”,<br /> 
 dijo Gabo, “una unidad
 regional afirmada sobre los valores de cada país. <br /> 
 Hasta el Brasil se habrá entregado del todo a esa
  América Latina y su portugués <br /> será una de las 
  lenguas hermanas de la región. <br />
  A pesar de las 
  diferencias existirá un castellano con el que nos 
  entenderemos todos”.<br />
   En esa declaración tampoco 
  dejó por fuera a España.<br /> “En cuanto a España”, 
  concluyó,“no hay razones para alarmarse,<br /> porque
   con ella nos hemos entendido siempre, incluso 
   en español,<br /> y acabaremos entendiéndonos también 
   dentro de cien años”.<br />
   </p>
   <Button variant="secondary" size="lg" active>
    Primary button
  </Button>{' '}









</div>
       
    )
}

export default Border
