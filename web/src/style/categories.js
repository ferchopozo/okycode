import styled from 'styled-components' 
import { SmallDevice } from '../core/enviorment/Constants'

export const ContainerCategories = styled.div` 
   width: 100%;
   padding-top: 30px;
   padding-bottom: 50px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   @media (max-width: ${SmallDevice}) {
         flex-direction: column;
   }
`