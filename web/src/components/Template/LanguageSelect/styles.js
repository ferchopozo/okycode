import styled from 'styled-components'
import { Dropdown } from 'primereact/dropdown'
import { Link as LinkRouter } from 'gatsby'
import { SmallDevice } from '../../../core/enviorment/Constants'
import { BackgroundColor } from '../../../style/GlobalColor'

export const List = styled(Dropdown)`
  color: white;
  width: auto;
  height: auto;
  justify-items: center;
  font-size: 14px;
  font-weight: 400;
  
  @media (max-width: ${SmallDevice}) {
     color: white;    
   }
`

export const Link = styled(LinkRouter)`
   color: white;
`

export const ContainerItem = styled.div`
   display: flex;
   align-items: center;
   background-color: ${BackgroundColor};
`

export const Image = styled.img`
   width: 20px;
   height: 20px;
   padding-right: 4px;
`
