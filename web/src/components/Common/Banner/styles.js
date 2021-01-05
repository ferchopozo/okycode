import styled from 'styled-components'

import { SmallDevice } from '../../../core/enviorment/Constants'
export const Container = styled.div`
     background-image: url(${({myBackground})=>myBackground});
     background-position: left center;
     background-color: transparent;
     background-repeat: 'no-repeat';
     background-size: cover;
     width: 100%;
     height: 320px;
     border: .2px solid transparent;

     @media (max-width: ${SmallDevice}) {
          
     }         
`