import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar } from '../core/enviorment/Constants'
import { Link } from '../components/Common/Link'
import { LayoutBanner } from '../container/LayoutBanner'
import { HeaderStaticColor,
         BackgroundService  } from '../style/GlobalColor'
import { ContainerCategories } from '../style/categories'
import { Card } from '../components/Common/Card'
import { IconCategory } from '../components/Template/IconCategory'
import { Paragraph } from '../components/Common/Paragraph'

const CategoriesPage = () => {
  const backgroundCategory = process.env.GATSBY_CATEGORIES
  return (<PageContainer  title="What we do?" 
                          description="We know how to develop software for the Web and mobile devices (iOS / Android). We like to develop products aimed at improving your productivity" 
                          lang={Languages.English}
                          activeMenu={ MenuToolBar.WhatWeDo } >     
                <LayoutBanner title="What we do?"
                              colorTitle = {HeaderStaticColor}
                              color={BackgroundService} 
                              textBanner = "We know how to develop software for the Web and mobile devices (iOS / Android). We like to develop products aimed at improving productivity"
                              image={backgroundCategory} >
                       <ContainerCategories>    
                              <Card  key={0}
                                     className = 'card-categories'
                                     image = {"https://binaries.okycode.org/images/slideservice.jpg"}
                                     hoverColor = "#4d4d4d"
                                     title = "Services" >
                                            <Paragraph color='white' lines='8' height="150px">
                                                  <IconCategory />  We focus on websites and mobile applications (iOS and Android).
                                                   We have led Software projects with agile and classic methodologies, feel free to
                                                   ask us what you need and we will be happy to do so. We care about your business and we want
                                                   make it an advantage over the rest. We design Software Architectures and we accompany 
                                                   you towards your success.
                                            </Paragraph>   
                                            <Link to="/en/services" text="What services do you do?" color="white" /> 
                               </Card>
                               <Card  key={1}
                                     className = 'card-categories'
                                     image = {"https://binaries.okycode.org/images/slideproduct.jpg"}
                                     hoverColor = "#269900"
                                     title = "Products" >
                                            <Paragraph color='white' lines='8' height="150px">
                                                  <IconCategory />  Our products are focused on helping you produce immediately
                                                   with good technological support and develop your ideas quickly.
                                            </Paragraph>    
                                            <Link to="/en/products" text="Which products have?" color="white" /> 
                               </Card>
                       </ContainerCategories>
                </LayoutBanner>
         </PageContainer>)
}

export default CategoriesPage
