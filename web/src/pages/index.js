import React from "react"
import { PageContainer } from '../container/PageContainer'
import { MenuToolBar,
         Languages } from '../core/enviorment/Constants'
import { graphql } from "gatsby"
import { ContainerGallery,
         ContainerActivity,
         GridActivity,
         GridActivityImage,
         GridActivityDescription,
         GridLink,
         GridMore,
         GalleryLegend } from '../style/home'
import { Link as CommonLink } from '../components/Common/Link'
import { Button } from '../components/Common/Button'
import { LinkGallery } from '../style/GlobalColor'
import { Paragraph } from '../components/Common/Paragraph'
import { HomeAboutUs } from '../components/Template/HomeAboutUs'

const IndexPage = ({ data }) => { 
  const image = data.allFile.nodes

  return (
              <PageContainer activeMenu={MenuToolBar.Home} 
                             title={"Home"} 
                             description={"Expertos en React Js / Native, podemos liderar proyectos, hacemos consultorías, trabajando con AWS, Diseño de portales con Gatsby y Aplicaciones móviles para iOS y Android."} 
                             lang={Languages.Spanish}  >
                 <ContainerGallery  imageUrl={image[0].childImageSharp.original.src}>
                       <GalleryLegend>
                            <h1>Bienvenido</h1>
                            <Paragraph lines={0}>
                                Hacemos <CommonLink to="/service/software-development" text= "Desarrollo de Software" color={ LinkGallery }  /> con pasión. 
                                Creamos <CommonLink to="/service/software-architecture" text= "Arquitecturas de Software" color={ LinkGallery }  /> justo para tí.
                                Si el tiempo es corto <CommonLink to="/service/software-consultancy" text= "Investigamos" color={ LinkGallery }  /> tecnología y
                                tienes una ventaja sobre tus competidores
                            </Paragraph>
                       </GalleryLegend>
                </ContainerGallery>
                 <ContainerActivity>
                      <GridActivity>
                         <GridActivityImage imageUrl="https://binaries.okycode.org/images/slideservice.jpg">
                               <GridLink href="/services" >Servicios</GridLink>
                         </GridActivityImage>
                         <GridActivityDescription>
                              Nos enfocamos en sitios Web y  aplicaciones móviles (iOS y Android).  
                              Hemos liderado royectos de Software con metodologías agiles y clásicas, siente libre de 
                              consultarnos lo que necesites y lo haremos muy gustosos. Nos preocupamos en tú negocio y queremos
                              convertirlo en una ventaja sobre el resto. Diseñamos Arquitecturas de Software y te acompañamos hacía tú éxito.
                              <br/>
                              <GridMore href="/services" rel="canonical" > Más Servicios</GridMore>
                         </GridActivityDescription>
                         <GridActivityImage imageUrl="https://binaries.okycode.org/images/slideproduct.jpg">
                              <GridLink href="/products" >Productos</GridLink>
                         </GridActivityImage> 
                         <GridActivityDescription>
                             Nuestros productos están enfocados a ayudarte a producir de forma inmediata 
                             con un buen soporte tecnológico y desarrollar tus ideas rápidamente.
                             <br/>
                              <GridMore href="/products" rel="canonical"> Acerca de nuestros Productos</GridMore>
                         </GridActivityDescription>
                      </GridActivity>
                 </ContainerActivity>
                 <HomeAboutUs title="Acerca de nosotros" >
                      <p>
                      ¡Hola! Somos un grupo de personas apasionadas por el desarrollo de software, con un diseño gráfico hermoso
                      para el usuario . Nos gusta escuchar tus ideas, descubrir cual es el camino correcto para cumplir tus éxitos. 
                      Nuestra intención es que inicies de una vez ese proyecto convirtiéndolo en el pilar de algo grandioso. 
                      Nuestra felicidad es tu éxito.
                      </p>
                      <Button to="/aboutus" text="Quieres saber más?" canonical={true} />
                 </HomeAboutUs>
              </PageContainer>
          )
}
export default IndexPage
export const pageQuery = graphql`query {
  allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {eq: "home.png"}}) {
    nodes {
      childImageSharp {
          original {
            src
          }
        }
    }
  }
}`

