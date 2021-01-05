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
     description: "We have 14 years of experience in Software Development in different businesses such as Administration, Process Automation and Management in the Technology Area. We optimize your applications in the cloud and turn it into a competitive advantage in your favor.",
     color: "#595959",
     subTitle: "We are your best decision",
     title: "Experience"
    },
    {
     description: "Our results are your successes. We want to have friends instead of clients, our approach is to transform your problems into competitive advantages in the market.",
     color: "#378a28",
     subTitle: "We love our work",
     title: "Results"
    },
    {
     description: "With research you would gain an advantage in your business, with the peace of mind of being on the right path and the security of obtaining better results.",
     color: "#999999",
     subTitle: "We investigate and act",
     title: "Vanguard"
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

  return (<PageContainer title="About Us" 
                         description="Software Design and Development. We use React JS / Native and publish it on AWS." 
                         lang={Languages.English}
                         activeMenu={ MenuToolBar.AboutUs } >
             <LayoutBanner  title="" 
                            description="We make your ideas come true online"
                            color={ BackgroundColor }
                            textBanner = ''
                            image={imageBanner} >
                  <Container>
                      <ContainerParagraph>
                          <Paragraph lines='8' color='black' >
                                 <b> Hello! </b> We are a group of people passionate about <b> Software development </b>, with a graphic design
                                 beautiful for the user. We like to <b> listen </b> your ideas, discover which is the right way to
                                 fulfill your successes. Our intention is to help you in your projects and thus transforming something great.
                                 Our happiness is your success.
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
