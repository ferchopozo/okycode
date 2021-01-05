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
  
  return (<PageContainer  title="Products"
                          description="Our products are focused on helping you produce immediately, with good technological support, and develop your ideas quickly." 
                          lang={Languages.English}
                          activeMenu={ MenuToolBar.WhatWeDo } >
               <LayoutBanner title="Productos"
                             colorTitle ={ActiveLink}
                             color='white'
                             textBanner = "Our products are focused on helping you produce immediately, with good technological support, and develop your ideas quickly."
                             colorTextBanner = 'white'
                             widthBanner = "50%"
                             image={process.env.GATSBY_BACKG_PRODUCTS} >
                      <Container>
                            <Paragraph color='black'>Look we have this for you</Paragraph>
                            <ContainerListOfServices>
                                <ItemActivity href="/en/service/gatsby">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/cm7s.jpg"}>
                                      Gatsby
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                     Gatsby helps you build websites, optimized for search engines and adjusted to your specifications
                                  </ItemActivityDescription>       
                                </ItemActivity> 
                                <br/>
                                <Link to="/en/categories" text="What we do?" />              
                            </ContainerListOfServices>
                      </Container>
                </LayoutBanner>
          </PageContainer>)
}

export default ProductsPage
