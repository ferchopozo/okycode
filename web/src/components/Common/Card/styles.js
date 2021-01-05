import styled from 'styled-components'
import { SmallDevice } from '../../../core/enviorment/Constants'
import { ColorCardFont } from '../../../style/GlobalColor'

export const ContainerCard = styled.div`
    background-image: url(${({myImage})=>myImage});
    border-radius: 10px;
    background-color: #e6e6e6;
    margin: 5px;
    padding: 10px;
    background-repeat: 'no-repeat';
    background-size: cover;
    :hover {
        background-image: none;
        background-color: ${({myHoverColor})=> myHoverColor};
    }
`

export const Header = styled.header`
     position: relative;
     margin-top: 4px;
     width: 100%;
     height: 30px;
     background-color: transparent;
     color: white;
     text-align: center;
     font-size: 14px; 
     font-weight: 400;
     vertical-align: middle;
`

export const Body =  styled.main`
     position: relative;
     margin-top: 4px;
     width: 100%;
     min-height: 180px;
     background-color: transparent;
     color: ${ColorCardFont};
     text-align: center;
     font-size: 14px; 
     font-weight: 400;
     /* border: 2px solid green; */

     @media (max-width: ${SmallDevice}) {
           min-height: 130px;
     }
`