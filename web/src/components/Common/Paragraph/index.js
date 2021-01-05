import React from 'react'
import { Container } from './styles'

export const Paragraph = ({ lines = 3,
                            color = 'white',
                            height = 'auto',
                            children})=>{
    return <Container myLines = {()=> lines} mycolor={()=> color} myheight={()=> height}  >
                {children}
           </Container>
}