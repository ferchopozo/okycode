import React from 'react'
import { ContainerCard,
         Body,
         Header } from './styles'

export const Card = ({className,
                      width, height, image,
                      title, children, hoverColor}) => {                  
    return(
        <ContainerCard  className= {`card ${className}`}
             myImage = {()=> image}
             myHoverColor = {()=> hoverColor}
             myHeight = {() => height }
             style={{ width: width, height: height }}>
                    <Header>
                         {title}
                     </Header>
                     <Body>
                        {children} 
                     </Body>
        </ContainerCard>
    )
}