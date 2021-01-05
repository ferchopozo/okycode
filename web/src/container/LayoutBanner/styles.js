import styled from 'styled-components'

export const TitleLayout = styled.div`
     position:relative;
     background-color: transparent;
     top: 20%;
     left: 5%;
     width: 30%;
     height: 10px;
`

export const ContainerBanner = styled.div`
     position:relative;
     background-color: transparent;
     top: 25%;
     left: 5%;
     width: ${({myWidthBanner}) => myWidthBanner};
     height: 100px;
    /* border: 5px solid red; */
`