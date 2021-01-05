import styled from 'styled-components'
import { SmallDevice } from '../../../core/enviorment/Constants'

export const Container = styled.p`
    color: ${({mycolor})=>mycolor};
    font-size: 16px;
    font-weight: 250;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: ${({myLines})=>myLines};
    -webkit-box-orient: vertical;
    height: ${({myheight})=>myheight};

    @media (max-width: ${SmallDevice}) {
        text-align: left;
        font-weight: 200;
        font-size: 14px; 
    }
`