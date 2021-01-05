import styled from 'styled-components'
import { Link as LinkRouter } from 'gatsby'
import { ColorFooterSocial,
         BackgroundFooter } from '../../../style/GlobalColor'
import { SmallDevice } from '../../../core/enviorment/Constants'

export const Container = styled.div`
    background-color: ${BackgroundFooter};
    text-align: center;
`
export const FullWidth = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  
  @media (max-width: ${SmallDevice}) {
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
  }
`

export const Paragraph = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  color: white;
`

export const SocialIcon = styled.a`
 padding: 10px 10px 0 0;
 display: inline-block;
 color: ${ColorFooterSocial};
`

export const ItemLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5px;
  font-size: 18px;

  @media (max-width: ${SmallDevice}) {
    font-size: 12px;
  }
`

export const LinkFooter = styled(LinkRouter)`
   color: white;
   font-size: 16px;
   font-weight: 250;
   text-align: left;

   @media (max-width: ${SmallDevice}) {
    font-size: 12px;
   }
`