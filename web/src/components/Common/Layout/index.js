import React from 'react'
import { Container } from './styles'


export const Layout = ({ children, background }) => {
  return (
    <Container background={background}>
      {children}
    </Container>
  )
}
