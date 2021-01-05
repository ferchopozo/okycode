import React from "react"
import { PageContainer } from '../container/PageContainer'
import { Languages, MenuToolBar} from '../core/enviorment/Constants'
import { MapBusiness } from '../components/Template/MapBusiness'
import { ContainerGetInTouch,
         GetInTouchDescription,
         GetInTouchTitle,
         GetInTouchButtons,
         GetInTouchCircle,
         IconWhatsApp,
         IconMobile,
         IconMail,
         GetInTouchBody,
         ContainerMap, 
         Map, 
         GeneralInformation,
         ContainerSocialMedia,
         SocialMedia,
         SocialMediaSubTitle,
         SocialMediaTitle,
         } from  '../style/contactUs'
import { FaMapMarkerAlt,
          FaFacebook,
          FaInstagram,
          FaYoutube,
          FaMobileAlt,
          FaEnvelope,
          FaHandshake,
          FaLinkedin } from 'react-icons/fa'


const ContactusPage = () => {
   const socialMedia = [{
     name: "@infookycode",
     id: "101958774823596",
     mobileIcon: "facebook",
     type: "facebook",
     url: "https://www.facebook.com/infookycode"
   },
   {
     name: "@infookycode",
     id: "fernando.pozo.ec",
     mobileIcon: "linkedin",
     type: "linkedin",
     url: "https://www.linkedin.com/in/ferpozoec/"
   },
   {
     name: "Oky Code",
     id: "UCEJx4vF0hznhRk0x6N7JtBw",
     mobileIcon: "youtube",
     type: "youtube",
     url: "https://www.youtube.com/channel/UC_GcbFQ-bhaH9RuQJzV6OKQ"
   },
   {
     name: "Meetings",
     id: "",
     mobileIcon: "handshake-o",
     type: "contactus",
     url: "https://fb.com/book/infookycode/"
   }]
  const renderSocialMedia = ()=>{
    let returValue = null
    returValue = socialMedia.map((item, index)=>{
        switch (item.type) {
            case "facebook":
                return <SocialMedia key={index} href={item.url} target="_blank">
                         <SocialMediaTitle>
                              <FaFacebook size='32' color='#4267B2' />&nbsp;Facebook<SocialMediaSubTitle>{item.name}</SocialMediaSubTitle>
                         </SocialMediaTitle>
                       </SocialMedia>
            case "youtube":
                return <SocialMedia key={index} href={item.url} target="_blank"  >
                             <SocialMediaTitle>
                                  <FaYoutube size='32' color='#FF0000' />&nbsp;Youtube<SocialMediaSubTitle>{item.name}</SocialMediaSubTitle>
                              </SocialMediaTitle>      
                        </SocialMedia>
            case "instagram":
                return <SocialMedia key={index} href={item.url} target="_blank" >
                          <SocialMediaTitle>
                               <FaInstagram size='32' color='#FF0000' />&nbsp;Instagram<SocialMediaSubTitle>{item.name}</SocialMediaSubTitle> 
                          </SocialMediaTitle>      
                       </SocialMedia>
            case "linkedin":
                return <SocialMedia key={index} href={item.url} target="_blank" >
                           <SocialMediaTitle>
                                <FaLinkedin size='32' color='#2867B2' />&nbsp;LinkedIn<SocialMediaSubTitle>{item.name}</SocialMediaSubTitle> 
                           </SocialMediaTitle>
                        </SocialMedia> 
            case "contactus":
                return <SocialMedia key={index} href={item.url} target="_blank" >
                          <SocialMediaTitle>
                               <FaHandshake size='32' color='white' />&nbsp;Let's meet
                          </SocialMediaTitle>      
                       </SocialMedia> 
            default:
                return <SocialMedia />
        }
    })

    return returValue
}
  
  return (<PageContainer title="Contact Us"
                        description="We design websites, mobile applications (iOS and Android) and automate processes. We use the Amazon cloud (AWS) for your projects."
                        lang={Languages.English}
                        activeMenu={ MenuToolBar.ContactUs } >
              <ContainerGetInTouch>
                    <GetInTouchBody>
                          <GetInTouchDescription>
                              <GetInTouchTitle>Let's get in touch</GetInTouchTitle>
                              We would like to know more about you. Contact us whenever you want
                          </GetInTouchDescription>
                          <GetInTouchButtons>
                              <GetInTouchCircle href="https://wa.me/18323424393" target="_blank">
                                  <IconWhatsApp  />
                              </GetInTouchCircle>
                              <GetInTouchCircle href="tel:+1 832 342 4393" target="_blank">
                                  <IconMobile />
                              </GetInTouchCircle>
                              <GetInTouchCircle href="mailto:oky-code@outlook.com" target="_blank">
                                  <IconMail />
                              </GetInTouchCircle>
                          </GetInTouchButtons>
                      </GetInTouchBody>       
              </ContainerGetInTouch>
              <ContainerMap>
                  <Map>
                       <MapBusiness />  
                       <GeneralInformation>
                            <FaMapMarkerAlt /> Houston, Estados Unidos
                       </GeneralInformation>
                       <GeneralInformation>
                            <FaMobileAlt /> +1 (832) 342-4393
                       </GeneralInformation>
                       <GeneralInformation>
                            <FaEnvelope /> oky-code@outlook.com"
                       </GeneralInformation>
                  </Map>
                  <ContainerSocialMedia> 
                      {renderSocialMedia()}
                  </ContainerSocialMedia>
              </ContainerMap>
          </PageContainer>)
}

export default ContactusPage
