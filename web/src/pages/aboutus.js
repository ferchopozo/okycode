import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar } from '../core/enviorment/Constants'
import { BackgroundColor } from '../style/GlobalColor'
import { LayoutBanner } from '../container/LayoutBanner'
import {Paragraph} from '../components/Common/Paragraph'
import { Container,
         ContainerParagraph,
         ContainerSkills,
         ItemSkill,
        ItemDescription } from '../style/aboutUs'

const AboutusPage = () => {
  const imageBanner = process.env.GATSBY_ABOUT_US;
  const corporateValue = [
    {
     description: "Contamos con 14 años de experiencia en Desarrollo de Software en diferentes negocios como Administración, Automatización de Procesos y Gestión en el Área de Tecnología. Optimizamos tus aplicaciones en la nube y la convertimos en una ventaja competitiva a tu favor.",
     color: "#595959",
     subTitle: "Somos tu mejor decisión",
     title: "Experiencia"
    },
    {
     description: "Nuestros resultados son sus éxitos.  Queremos tener amigos en lugar de clientes, nuestro enfoque es transformar tus problemas en ventajas competitivas en el mercado.",
     color: "#378a28",
     subTitle: "Amamos nuestro trabajo",
     title: "Resultados"
    },
    {
     description: "Con la investigación obtendrías una ventaja en tú negocio, con la tranquilidad de estar en el camino correcto y la seguridad de obtener mejores resultados",
     color: "#999999",
     subTitle: "Investigamos y actuamos",
     title: "Vanguardía"
    }
   ]
  const renderItemSkills = ()=>{
    return corporateValue.map((item, index)=>{
        return <ItemSkill key={index} 
                          subTitle={item.subTitle} 
                          title={item.title}  mycolor={()=> item.color}  >
                  <ItemDescription>
                        {item.description}
                  </ItemDescription>
               </ItemSkill>
    })
  }

  return (<PageContainer title="Acerca de nosotros" 
                         description="Diseño y Desarrollo de Software. Usamos React JS/ Native y lo publicamos en AWS." 
                         lang={Languages.Spanish}
                         activeMenu={ MenuToolBar.AboutUs } >
             <LayoutBanner  title="" 
                            description="Hacemos realidad tús ideas en línea"
                            color={ BackgroundColor }
                            textBanner = ''
                            image={imageBanner} >
                  <Container>
                      <ContainerParagraph>
                          <Paragraph lines='8' color='black' >
                                <b>¡Hola!</b> Somos un grupo de personas apasionadas por el <b>Desarrollo de software</b>, con un diseño gráfico
                                hermoso para el usuario . Nos gusta <b>escuchar</b> tus ideas, descubrir cual es el camino correcto para 
                                cumplir tus éxitos. Nuestra intención es ayudarte en tus proyectos y así transformando algo grandioso. 
                                Nuestra felicidad es tu éxito.
                            </Paragraph>
                        </ContainerParagraph>
                        <ContainerSkills>
                            {renderItemSkills()}
                        </ContainerSkills>
                  </Container>      
              </LayoutBanner> 
          </PageContainer>)
}

export default AboutusPage
