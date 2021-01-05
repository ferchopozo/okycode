import React from 'react'
import { Layout } from '../../components/Common/Layout'
import { Banner } from '../../components/Common/Banner'
import { Paragraph } from '../../components/Common/Paragraph'
import { TitleLayout,
         ContainerBanner } from './styles'

export const LayoutBanner = ({ title, textBanner,
                               color, image, children, colorTitle = 'white', widthBanner = '30%',
                               colorTextBanner = 'black', linesBanner = 8,  })=>{
    return (<Layout background={color}>
                <Banner image={ ()=> { return image} }>
                       <TitleLayout className='title' style={{color:colorTitle}}>
                           {title}
                       </TitleLayout>
                       <ContainerBanner myWidthBanner = {()=> widthBanner}>
                          <Paragraph color={ colorTextBanner } lines={ linesBanner } >
                               {textBanner}
                          </Paragraph>
                       </ContainerBanner>
                </Banner>
                { children }
            </Layout>)
}