import React from 'react'

import { Container } from './styles'

export const Banner = ({ children, image }) => {
    return(<Container myBackground={ ()=> image }  >
               {children}
           </Container>)
}