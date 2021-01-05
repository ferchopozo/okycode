import styled from 'styled-components'
import { Card } from 'primereact/card'

import { SmallDevice } from '../core/enviorment/Constants'

export const Container = styled.div`
    background-color: white;
    height: 90vh;

    @media (max-width: ${SmallDevice}){
        height: 100%;
    }
`

export const ContainerParagraph = styled.div`
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
    
`

export const ContainerSkills = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 2%;

   @media (max-width: ${SmallDevice}){
      flex-direction: column;
   }
  
`

export const ItemSkill = styled(Card)`
    background-color: ${({mycolor})=>mycolor};
    width: 30%;
    height: 50vh;
    margin: 10px;
    color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px #999999;

    @media (max-width: ${SmallDevice}){
        width: 350px;
        height: 250px;
        margin: 5px;
    }
`

export const ItemDescription = styled.div`
      height: 90%;
      overflow-x: hidden;
      overflow-y: auto;
`

