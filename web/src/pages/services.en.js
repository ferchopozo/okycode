import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar } from '../core/enviorment/Constants'
import { LayoutBanner } from '../container/LayoutBanner'
import { ActiveLink } from '../style/GlobalColor'
import { Container,
         ItemActivity,
         ContainerListOfServices, 
         ItemActivityDescription,
         ItemActivityImage} from '../style/services'
import { Paragraph } from '../components/Common/Paragraph'
import { Link } from '../components/Common/Link'

const ServicesPage = () => {
  
  return (<PageContainer  title="Services"
                          description="Our services are focused on websites and mobile applications (iOS and Android). We have led some software projects with agile and classic methodologies, you can ask us what you need and we will be happy to do so. We like to think about your business and that you can turn it into an advantage. We design Software Architectures and we accompany you towards your success" 
                          lang={Languages.English}
                          activeMenu={ MenuToolBar.WhatWeDo } >
               <LayoutBanner title="Servicios"
                             colorTitle ={ActiveLink}
                             color='white'
                             textBanner = "Our services are focused on websites and mobile applications (iOS and Android). We have led some software projects with agile and classic methodologies, you can ask us what you need and we will be happy to do so. We like to think about your business and that you can turn it into an advantage. We design Software Architectures and we accompany you towards your success"
                             colorTextBanner = 'white'
                             widthBanner = "50%"
                             image={process.env.GATSBY_BACKG_SERVICES} >
                      <Container>
                            <Paragraph color='black'>Look we have this for you</Paragraph>
                            <ContainerListOfServices>
                                <ItemActivity href="/en/service/software-architecture">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicearchitect.jpg"}>
                                         Architecture
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                        We design Website and Mobile Applications
                                  </ItemActivityDescription>       
                                </ItemActivity>
                                <ItemActivity href="/en/service/software-development">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicecoding.jpg"}>
                                        Coding
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                       We build Applications with React JS / Native and produce them with AWS
                                  </ItemActivityDescription>       
                                </ItemActivity>
                                <ItemActivity href="/en/service/project-leader">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicemanager.jpg"}>
                                        Project Leader
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                       Planning and Leadership of Software projects with fast and classic methodologies
                                  </ItemActivityDescription>    
                                  </ItemActivity>  
                                  <ItemActivity href="/en/service/software-consultancy">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/serviceresearch.jpg"}>
                                        Researching
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                       Attention to your doubts, research of technologies and search for ideas
                                  </ItemActivityDescription>      
                                </ItemActivity>   
                                <br/>
                                <Link to="/en/categories" text="What we do?" />       
                            </ContainerListOfServices>
                      </Container>
                </LayoutBanner>
          </PageContainer>)
}

export default ServicesPage
