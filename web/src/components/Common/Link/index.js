import React from 'react'
import { Container } from './styles'

export const Link = ({to,handleClick = null,text, color = 'black'})=>{
    const HandleClickComponent = ()=>{
          if ( null !== handleClick){
               handleClick()
          }
    }

    return <Container onClick={HandleClickComponent}
                      href={to}
                      style={{color: color}} >
               {text}
            </Container>
}