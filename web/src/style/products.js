import styled from 'styled-components'

export const Container = styled.div`
   margin-left: 10%;
   margin-right: 10%;
   margin-top: 20px;
`

export const ContainerListOfServices = styled.div`
      margin-top: 20px;
      margin-bottom: 10%;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      width: 80%;
`
export const ItemActivity = styled.a`
    display: flex;
    flex-direction: row;
    height: 120px;
    width: 100%;
    text-decoration: none;
    margin-bottom: 20px;
`
export const ItemActivityImage = styled.div`
     background-position: 50% 50%;
     background-repeat: no-repeat;
     background-size: cover;
     background-image: url(${({myurl}) => myurl});
     min-width: 30%;
     height: 100%;
     margin: 10px;
     padding: 5px;
     color: white;
     font-size: 14px;
     font-weight: 500;
     display: flex;
     align-items: center;
     justify-content: center;
`

export const ItemActivityDescription = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     color: black;
     min-width: 40%;
     text-align: justify;
     font-size: 14px;
     font-weight: 300;
`