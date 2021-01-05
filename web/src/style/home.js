import styled from 'styled-components' 
import { BackgroundColor } from '../style/GlobalColor'
import { SmallDevice } from '../core/enviorment/Constants' 

export const ContainerGallery = styled.div`
    width: 100%;
    height: 50vh;
    background-color:  ${BackgroundColor};
    background-image: url(${(props) => props.imageUrl});
    background-position: 75% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    align-items: center;
    display: flex;
`

export const GalleryLegend = styled.div`
   width: 40%;
   padding: 0px 5px 10px 30px;
   color: white;
`
export const ContainerActivity = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
`
export const GridActivity = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 180px 180px;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    margin: 10px;

    @media (max-width: ${SmallDevice}) {
        display: flex;
        flex-direction: column;
    }
`

export const GridActivityImage = styled.div`
      background-image: url(${(props) => props.imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      @media (max-width: ${SmallDevice}) {
        height: 200px;
      }
`

export const GridActivityDescription = styled.div`
     margin: 20px;
     text-align: justify;
     font-size: 14px;
     font-weight: 300;
`

export const GridLink = styled.a`
    color: white;
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
`

export const GridMore = styled.a`
    color: #41a330;
    font-size: 14px;
    font-weight: 400;
`

