import styled from 'styled-components'
import {
  BackgroundColor
} from '../../../style/GlobalColor'


export const Container = styled.div`
    display:flex;
    flex-direction: row; 
    align-items: center;  
`
export const DivLogo = styled.div`
   /* Default Screen */
   background-color: ${BackgroundColor};
   width: 30%;
   height: 70px;

   @media (max-width: 576px) {
        /* Divices maximum 576 */
        background-color: ${BackgroundColor};
        width: 60%; 
        height: 70px;  
    }
`

export const DivMenuItems = styled.div`
    padding-left:0;
    padding-top: 20px;
    padding-right: 20px;

    @media (max-width: 576px) {
      padding-left: 0;
    }
`
