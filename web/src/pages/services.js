import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar } from '../core/enviorment/Constants'
import { LayoutBanner } from '../container/LayoutBanner'
import { ActiveLink } from '../style/GlobalColor'
import { Link } from '../components/Common/Link'
import { Container,
         ItemActivity,
         ContainerListOfServices, 
         ItemActivityDescription,
         ItemActivityImage} from '../style/services'
import { Paragraph } from '../components/Common/Paragraph'

const ServicesPage = () => {
  
  return (<PageContainer  title="Servicios"
                          description="Nuestros servicios son enfocados en sitios Web y  aplicaciones móviles(iOS y Android).  Hemos liderado algunos proyectos de software con metodologías agiles y clásicas, nos puedes consultar lo que necesites y lo haremos muy gustosos. Nos gusta pensar en tú negocio y que puedas convertirlo en una ventaja. Diseñamos Arquitecturas de Software y te acompañamos hacía tú éxito" 
                          lang={Languages.Spanish}
                          activeMenu={ MenuToolBar.WhatWeDo } >
               <LayoutBanner title="Servicios"
                             colorTitle ={ActiveLink}
                             color='white'
                             textBanner = "Nuestros servicios son enfocados en sitios Web y  aplicaciones móviles(iOS y Android).  Hemos liderado algunos proyectos de software con metodologías agiles y clásicas, nos puedes consultar lo que necesites y lo haremos muy gustosos. Nos gusta pensar en tú negocio y que puedas convertirlo en una ventaja. Diseñamos Arquitecturas de Software y te acompañamos hacía tú éxito"
                             colorTextBanner = 'white'
                             widthBanner = "50%"
                             image={process.env.GATSBY_BACKG_SERVICES} >
                      <Container>
                            <Paragraph color='black'>Mira tenemos esto para ti</Paragraph>
                            <ContainerListOfServices>
                                <ItemActivity href="/service/software-architecture">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicearchitect.jpg"}>
                                         Arquitectura
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                       Diseñamos Sitio Web y Aplicaciones móviles
                                  </ItemActivityDescription>       
                                </ItemActivity>
                                <ItemActivity href="/service/software-development">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicecoding.jpg"}>
                                        Programación
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                        Construimos Aplicaciones con React JS/Native y los producimos con AWS 
                                  </ItemActivityDescription>       
                                </ItemActivity>
                                <ItemActivity href="/service/project-leader">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/servicemanager.jpg"}>
                                        Liderazgo de Proyectos
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                        Planificación y Liderazgo de proyectos de Software con metodologías rápidas y clásicas
                                  </ItemActivityDescription>    
                                  </ItemActivity>  
                                  <ItemActivity href="/service/software-consultancy">
                                  <ItemActivityImage myurl = {()=>"https://binaries.okycode.org/images/serviceresearch.jpg"}>
                                        Investigación
                                  </ItemActivityImage>
                                  <ItemActivityDescription>
                                  Atención a sus dudas, investigación de tecnologías y búsqueda de ideas
                                  </ItemActivityDescription>      
                                </ItemActivity>  
                                <br/>
                                <Link to="/categories" text="¿Qué hacemos?" />        
                            </ContainerListOfServices>
                           
                      </Container>
                </LayoutBanner>
          </PageContainer>)
}

export default ServicesPage
