import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='mb-0'>
      <Container>
        <Row>
          <Col className='text-center py-3'>&copy; ijamy vincent</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer