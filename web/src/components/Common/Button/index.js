import React from 'react'
import { Container } from './styles'

export const Button = ({ id, text, to, canonical = false }) => {
  return (
    <Container id= {id} to={to}  rel={canonical?"canonical":""} >
      {text}
    </Container>
  )
}
