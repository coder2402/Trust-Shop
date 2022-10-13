import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const msg ={
  color: "blue",
}

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3' style={msg}>Copyright &copy; trustShop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
