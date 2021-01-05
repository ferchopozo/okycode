import React from 'react'
import { DivAboutUs, 
         DivDescription,
         DivTitle } from './styles'

export const HomeAboutUs = ({title, children}) => {
    const styleAboutUs = {
        backgroundImage: `url(${process.env.GATSBY_ABOUTUS})`,
        backgroundPosition: '90% 0%', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return(
        <DivAboutUs style={styleAboutUs} >
            <DivTitle>{ title }</DivTitle>
            <DivDescription>
                 {children}
            </DivDescription>        
        </DivAboutUs>
    )
}