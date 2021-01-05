import styled from 'styled-components'

import { SmallDevice } from '../../../core/enviorment/Constants'
import { BackgroundHomeCompany } from '../../../style/GlobalColor'

export const DivAboutUs = styled.div` 
   background-color: ${BackgroundHomeCompany};
   background-repeat: 'no-repeat';
   min-height: 200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 10px;

   @media (max-width: ${SmallDevice}) {
    min-height: 300px;
   }
`

export const DivDescription = styled.div`
  width: 60%;
  height: 100%;
  color: white;
  font-size: 14px;
  font-weight: 300;
  justify-self: end;
  padding-left: 20px;

  @media (max-width: ${SmallDevice}) {
      font-size: 13px;
      font-weight: 250;
  }
`

export const DivTitle = styled.div`  
      color: #41a330;
      font-size: 17px;
      font-weight: 450;
      padding-left: 20px;

      @media (max-width: ${SmallDevice}) {
        font-size: 14px;
      }     
`