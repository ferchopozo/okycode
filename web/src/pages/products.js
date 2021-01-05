import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar } from '../core/enviorment/Constants'
import { LayoutBanner } from '../container/LayoutBanner'
import { ActiveLink } from '../style/GlobalColor'
import { Container,
         ItemActivity,
         ContainerListOfServices, 
         ItemActivityDescription,
         ItemActivityImage} from '../style/products'
import { Paragraph } from '../components/Common/Paragraph'
import { Link } from '../components/Common/Link'

const ProductsPage = () => {
  
  return (<PageContainer  title="Productos"
                          description="Nuestros productos están enfocados a ayudarte a producir de forma inmediata, con un buen soporte tecnológico y desarrollar tus ideas rápidamente." 
                          lang={Languages.Spanish}
                          activeMenu={ MenuToolBar.WhatWeDo } >
               <LayoutBanner title="Productos"
                             colorTitle ={ActiveLink}
                             color='white'
                             textBanner = "Nuestros productos están enfocados a ayudarte a producir de forma inmediata, con un buen soporte tecnológico y desarrollar tus ideas rápidamente."
                             colorTextBanner = 'white'
                             widthBanner = "50%"
                             image={process.env.GATSBY_BACKG_PRODUCTS} >
                      <Container>
                            <Paragraph color='black'>Mira tenemos esto para ti</Paragraph>
                            <ContainerListOfServices>
                                <ItemActivity href="/service/gatsby">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/cm7s.jpg"}>
                                      Gatsby
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                      Gatsby te ayuda a construir sitios Web, optimizados para buscadores y ajustada a tus especificaciones
                                  </ItemActivityDescription>       
                                </ItemActivity>
                                <br/>
                                <Link to="/categories" text="¿Qué hacemos?" />      
                            </ContainerListOfServices>
                      </Container>
                </LayoutBanner>
          </PageContainer>)
}

export default ProductsPage
