import styled from 'styled-components'
import { ButtonContactMe } from '../../../style/GlobalColor'
import { SmallDevice } from '../../../core/enviorment/Constants'
import { Link } from 'gatsby'

export const Container = styled(Link)`
   background-color: ${ButtonContactMe};
   border-radius: 3px;
   border: 0px;
   color: white;
   font-size: 14px;
   font-weight: 400;
   padding: 5px 3px 5px 3px ;

   @media (max-width: ${SmallDevice}) {
      background-color: ${ButtonContactMe};
      color: white;
      font-size: 12px;
      font-weight: 300;
      border-radius: 5px;
      padding: 8px;
   }
`
