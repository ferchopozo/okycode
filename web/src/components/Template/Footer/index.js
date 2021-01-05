import React from 'react'
import { LogoBlack } from '../LogoBlack/'
import {
  FullWidth,
  Paragraph,
  SocialIcon,
  ItemLink,
  LinkFooter,
  Container
} from './styles'
import {
  TiSocialFacebookCircular,
  TiSocialLinkedin,
  TiSocialYoutubeCircular
} from 'react-icons/ti'
import { Languages } from '../../../core/enviorment/Constants'

export const Footer = ({data, lang}) => {
  const sizeSocialMediaIcon = 28
  const legend = (lang)=>{
    switch(lang){
       case Languages.Spanish:
         return "Recuerda el límite lo pones tú mismo, visítanos en nuestras redes sociales."
       default: 
         return "Remember the limit you set yourself, visit us on our social networks."
    }
  }
  const renderItemMenu = () =>{
      return data.filter(item => item.component === 'link')
                 .map((element,index) =>  {
                          return <ItemLink key={index}><LinkFooter to={element.path} rel="canonical">{element.menu}</LinkFooter></ItemLink>
                 })
  }

  return (
    <Container>
         <div className='p-grid' style={{width: '100%'}}>
              <div className='p-col-6 p-col-align-center'>
                  <FullWidth><LogoBlack /></FullWidth>
                  <div className='paragraph footer'>
                     { legend(lang) }
                  </div>
                  <FullWidth>
                    <SocialIcon href="https://www.facebook.com/infookycode" target="_blank" ><TiSocialFacebookCircular size={sizeSocialMediaIcon} /></SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/company/okycode" target="_blank"><TiSocialLinkedin size={sizeSocialMediaIcon} /></SocialIcon>
                    <SocialIcon href="https://youtube.com/channel/UC_GcbFQ-bhaH9RuQJzV6OKQ" target="_blank"><TiSocialYoutubeCircular size={sizeSocialMediaIcon} /></SocialIcon>
                  </FullWidth>
              </div>
              <div className='p-col-6 p-align-center p-col-align-left' >
                   {renderItemMenu()}
              </div>
              <div className='p-col-12 p-col-align-center'>
                  <Paragraph className='default-label' >@2020 Copyright </Paragraph>
              </div>
         </div>
    </Container>
  )
}
