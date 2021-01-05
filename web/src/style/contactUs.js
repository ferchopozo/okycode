import styled from 'styled-components'
import { ColorButtonSocialMedia,
         BackgroundGetInTouch,
         ColorHoverList }  from '../style/GlobalColor'
import { SmallDevice } from '../core/enviorment/Constants'
import { FaWhatsapp, 
         FaMobileAlt,
         FaEnvelope } from 'react-icons/fa'

export const ContainerMap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
   
    @media(max-width: ${SmallDevice}){
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
`

export const Map = styled.div`
    width: 60%;
    height: 500px;
    padding: 2%;

    @media(max-width: ${SmallDevice}){
        width: 96%;
    }
`

export const ContainerSocialMedia = styled.div`
    width: 40%;
    padding: 2%;
    display: flex;
    flex-direction: column;

    @media(max-width: ${SmallDevice}){
        width: 94%;
    }
`
export const SocialMedia = styled.a`
    width: 98%;
    padding: 2%;
    background-color: ${ColorButtonSocialMedia};
    border: 2px solid white;
    color: white;
    text-decoration: none;
    
    :hover {
        background-color: ${ColorHoverList};
        cursor: pointer;
    }
`
export const SocialMediaTitle =styled.div`
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;

    :hover {
        font-weight: 400;
    }

    @media(max-width: ${SmallDevice}){
        font-size: 14px; 
    }
`
export const SocialMediaSubTitle =styled.div`
    font-size: 16px;
    font-weight: 400;
    color: silver;
    display: flex;
    align-items: center;
    padding-left: 4px;

    @media(max-width: ${SmallDevice}){
        font-size: 14px; 
    }
`

export const GeneralInformation = styled.div`
   width: 100%;
   font-size: 14px;
   font-weight: 300;
   text-align: left;
   padding-top: 10px;
   padding-left: 20px;
   color: black;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box; 
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
`

export const ContainerGetInTouch = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${BackgroundGetInTouch};
    padding-top: 20px;
    padding-bottom: 20px;
`

export const GetInTouchBody = styled.div`
    display: flex;
    flex-direction: row;
`

export const GetInTouchDescription = styled.div`
    padding-left: 5%;
    width: 70%;
    color: #e6e6e6;
    font-size: 14px;
    font-weight: 300;
`

export const GetInTouchTitle = styled.h1`
    color: #ffffff !important;
    font-size: 18px;
    font-weight: 500;
    width: 90%;
    margin: 0px;
`

export const GetInTouchButtons = styled.div`
    padding-left: 2%;
    padding-right: 2%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GetInTouchCircle = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left: 5px;
    margin-right: 5px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: ${SmallDevice}) {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-left: 2px;
        margin-right: 2px;
    }
`

export const IconWhatsApp = styled(FaWhatsapp)`
    font-size: 35px;
    color: #41a330;

    @media (max-width: ${SmallDevice}) {
        font-size: 20px;
    }
`

export const IconMobile = styled(FaMobileAlt)`
    font-size: 35px;
    color: #41a330;

    @media (max-width: ${SmallDevice}) {
        font-size: 20px;
    }
`

export const IconMail = styled(FaEnvelope)`
    font-size: 35px;
    color: #41a330;

    @media (max-width: ${SmallDevice}) {
        font-size: 20px;
    }
`
