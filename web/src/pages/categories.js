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
  return (<PageContainer  title="¿Qué hacemos?" 
                          description="Sabemos como desarrollar software para la Web y dispositivos móviles (iOS / Android). Nos gusta desarrollar productos orientados a mejorar tú productividad." 
                          lang={Languages.Spanish}
                          activeMenu={ MenuToolBar.WhatWeDo } >     
                <LayoutBanner title="¿Qué hacemos?"
                              colorTitle = {HeaderStaticColor}
                              color={BackgroundService} 
                              textBanner = "Sabemos cómo desarrollar software para la Web y dispositivos móviles (iOS / Android). Nos gusta desarrollar productos orientados a mejorar la productividad."
                              image={backgroundCategory} >
  
                       <ContainerCategories>    
                              <Card  key={0}
                                     className = 'card-categories'
                                     image = {"https://binaries.okycode.org/images/slideservice.jpg"}
                                     hoverColor = "#4d4d4d"
                                     title = "Servicios" >
                                            <Paragraph color='white' lines='8' height="150px">
                                                  <IconCategory />  Nos enfocamos en sitios Web y  aplicaciones móviles (iOS y Android).  
                                                  Hemos liderado royectos de Software con metodologías agiles y clásicas, siente libre de 
                                                  consultarnos lo que necesites y lo haremos muy gustosos. Nos preocupamos en tú negocio y queremos
                                                  convertirlo en una ventaja sobre el resto. Diseñamos Arquitecturas de Software y te acompañamos hacía tú éxito.
                                            </Paragraph>   
                                            <Link to="/services" text="¿Qué servicios haces?" color="white" /> 
                               </Card>
                               <Card  key={1}
                                     className = 'card-categories'
                                     image = {"https://binaries.okycode.org/images/slideproduct.jpg"}
                                     hoverColor = "#269900"
                                     title = "Productos" >
                                            <Paragraph color='white' lines='8' height="150px">
                                                  <IconCategory />  Nuestros productos están enfocados a ayudarte a producir de forma inmediata 
                                                  con un buen soporte tecnológico y desarrollar tus ideas rápidamente.
                                            </Paragraph>    
                                            <Link to="/products" text="¿Qué Productos tienes?" color="white" /> 
                               </Card>
                       </ContainerCategories>
                </LayoutBanner>
         </PageContainer>)
}

export default CategoriesPage
