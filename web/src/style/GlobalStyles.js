import { createGlobalStyle } from 'styled-components'
import { SmallDevice } from '../core/enviorment/Constants'
import { ColorUnderLine, 
         ColorHeaderGalleria,
         ColorDescriptionGalleria,
         BackgroundColor,
         HeaderStaticColor,
         HoverLink,
         ColorHeader,
         ColorTitle,
         BlockquoteYellow,
         ColorBorderServices,
         ActiveLink } from './GlobalColor'
         
export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;      
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
    }

    body {
        width: 100%; 
        overflow-x: hidden;
        margin: 0;
    }

    .title {
        font-size: 22px;
        font-weight: 400;
        color: ${ColorTitle}; 

        @media (max-width: ${SmallDevice}) {
            font-weight: 400;
            font-size: 14px; 
        }
    }

    .subTitle {
        font-size: 18px;
        font-weight: 400;
        color: ${ColorHeader}; 

        @media (max-width: ${SmallDevice}) {
            font-weight: 400;
            font-size: 12px; 
        }
    }

    .bodyService {
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2%;
        margin-bottom: 2%;
    }


    h1 {
        font-size: 22px;
        font-weight: 400;
        display: block;
        margin: 10;
        color: ${ColorHeader};

        @media (max-width: ${SmallDevice}) {
            font-weight: 400;
            font-size: 16px; 
        }
    }

    h2 {
        font-size:16px;
        margin: 0;
        color: ${ColorTitle};
        font-weight: 500;
    }

    h3 {
        font-size:14px;
        margin: 0;
        color: ${HoverLink};
        font-weight: 500;
    }   

    .underLine {
        border-bottom: 2px solid  ${ColorUnderLine};
    }

    .textInDark {
       color: white;
      
    }

    .paddingTop5Percent {
        padding-top: 5%;
    }

    .centerHorizontal{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .centerInDiv{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .centerColumnInDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .iconWhite {
       color: white;
    }

    .header {
        background-color: ${BackgroundColor};
        display:flex;
        flex-direction: row;  
        justify-self: center;   
        /* border: 5px solid red;   */
    }

    .header-static {
        background-color: ${HeaderStaticColor};
        opacity: .6;
        position: fixed;
        top: 10px;
        width: 100%;
        height: 70px;
        z-index:999999999999999999999999;
        animation: moveDown 2s  ease-in-out;

        @keyframes moveDown {
            from {
                transform: translateY(-8rem)
            }   
            to {
                transform: translateY(0rem)
            }     
        }
        
        @media (max-width: ${SmallDevice}) {
            background-color: ${HeaderStaticColor};
            position: fixed;
            left: 0;
            top:0;
            width: 100%;   
            border-radius: 0px;   
        }
    }

    .navigator {
        margin: 0;
        padding: 0;
    
        @media (max-width: ${SmallDevice}) {
            display: none;
        }
    }

    .navigatorMobile {
        display: none;
        @media (max-width: ${SmallDevice}) {
          display: inline;
          padding-left: 20px;
         }
    }

    .divNavigatorMobile {
        display: flex;
        flex-direction: column;
        align-items:baseline;
        padding-left: 15%;
        padding-top: 10%;
        padding-right: 10%;
    }

    .linkIcon {
        color: white;
        font-size: 16px;
        padding-right: 5px;
        padding-left: 3px;
        text-decoration: none;

        & :hover {
            color: ${HoverLink};
        }

        @media (max-width: ${SmallDevice}) {
            padding-left: 0;
            padding-right: 0;
            padding-top: 10px;
        }
    }

    .paragraph {
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;

        @media (max-width: ${SmallDevice}) {
            text-align: left;
            font-weight: 400;
            font-size: 14px; 
        }
    }

    .paragraph-category {
        font-size: 18px;
        font-weight: 250;
        text-align: justify;
        overflow: hidden;
        display: -webkit-box; 
        -webkit-box-orient: vertical;

        @media (max-width: ${SmallDevice}) {
            text-align: left;
            font-weight: 200;
            font-size: 14px; 
        }
    }

    .paragraph.footer {
        font-size: 14px;
        font-weight: 250;
        color: white;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 10px;
        
        @media (max-width: ${SmallDevice}) {
            font-weight: 200;
            font-size: 12px; 
        }
    }

    .default-label {
        font-size: 16px;
        font-weight: 250;

        @media (max-width: ${SmallDevice}) {
            font-weight: 200;
            font-size: 12px; 
        }

    }

    .primary{
        color: ${ActiveLink};
    }

    .paddding10Horizontal {
        padding-left: 10px;
        padding-right: 10px;
    }

    .paddding10Vertical {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .alignRowRight {
        justify-content: flex-end;   
    }

    .alignRowCenter {
        justify-content: center;   
    }

    .imageProfile {
        width: 100px;
        height: 100px;
        border-radius: 12px;        
    }

    ul{
        list-style-type: none;
        margin: 0;
        padding:0;
     }

    li {
    margin: 0 0 5px 0;
    }

    .liSpace {
       margin: 0 0 5px 0;
       padding-left: 30px;
    }

    /** Gallery Home  */
    .banner-user{
       height: 380px;
    }

    .banner-user-elem{
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;
    }

    .banner-user-elem .banner-user-title{
        font-size: 32px;
        top: 40%;
    }

    .banner-user-elem .banner-user-text{
        top: 40%;
    }

    .banner-anim-elem .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .banner-title {
        color: ${ColorHeaderGalleria}
    }

    .banner-paragrah {
        color: ${ColorDescriptionGalleria}
    }

    .banner-link {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }

    .bg.banner-image {
        background-position: right;
        background-repeat: no-repeat;
    }
    /**/
    blockquote{
        margin-left: 5px;
        margin-bottom: 3%;
        padding-left: 20px;
        border-left:6px solid ${ActiveLink};
        position: relative;
    }

    .yellow {
        border-left:6px solid ${BlockquoteYellow} !important;
    }

    .align-right {
       width: 50%;
       margin-left: 50%;
    }

    .align-left {
       width: 50%;
       margin-left: 0%;
    }

    .custom-block.service  {
        border: 1px ${ColorBorderServices};
        border-style: dotted;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;

        @media (max-width: ${SmallDevice}) {
            flex-direction: column;
        }
    }

    .custom-block.service .custom-block-heading {
          width: 20%;
          padding: 10px;

          @media (max-width: ${SmallDevice}) {
            width: 60%;
        }

    }

    .custom-block.service .custom-block-body {
        width: 80%;
        text-align: left;
        padding-left: 5%;
        padding-right: 5%;
    }

    .custom-block.service .custom-block-body strong {
        color: ${ColorHeader};
    }

    .card-categories {
        height : 40vh;
        width : 45%;

        @media (max-width: ${SmallDevice}) {
             width : 90%;
             height : 40vh;
        }
    }

    #notfound {
    position: relative;
    height: 100vh;
    border: 1px solid red;
    }
`
